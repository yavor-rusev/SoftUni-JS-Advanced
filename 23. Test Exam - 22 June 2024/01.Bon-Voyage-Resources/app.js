window.addEventListener('load', solve);

function solve() {
    const firstNameRef = document.getElementById("first-name");
    const lastNameRef = document.getElementById("last-name");
    const fromDateRef = document.getElementById("from-date");
    const toDateRef = document.getElementById("to-date");
    const nextBtn = document.getElementById("next-btn");

    nextBtn.addEventListener("click", onNext);

    const form = document.querySelector("form");
    const infoListRef = document.querySelector(".info-list");
    const confirmListRef = document.querySelector(".confirm-list");

    function onNext(event) {
        event.preventDefault();

        const firstName = firstNameRef.value;
        const lastName = lastNameRef.value;
        const fromDate = fromDateRef.value;
        const toDate = toDateRef.value;

        if (!firstName || !lastName || !fromDate || !toDate || fromDate >= toDate) {
            return
        }

        const liTemplate = createLi(firstName, lastName, fromDate, toDate);

        const editBtn = createBtn("Edit", "edit-btn");
        editBtn.addEventListener("click", onEdit);

        const continueBtn = createBtn("Continue", "continue-btn");
        continueBtn.addEventListener("click", onContinue);

        infoListRef.appendChild(liTemplate);
        infoListRef.appendChild(editBtn);
        infoListRef.appendChild(continueBtn);

        form.reset();
        nextBtn.disabled = true;
    }

    function createLi(firstName, lastName, fromDate, toDate) {
        const li = document.createElement("li");
        li.classList.add("vacation-content");

        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = `Name: ${firstName} ${lastName}`;
        article.appendChild(h3);

        const p1 = document.createElement("p");
        p1.textContent = `From date: ${fromDate}`;
        article.appendChild(p1);

        const p2 = document.createElement("p");
        p2.textContent = `To date: ${toDate}`;
        article.appendChild(p2);

        li.appendChild(article);

        return li;
    }

    function createBtn(text, classes) {
        const btn = document.createElement("button");
        btn.textContent = text;

        if (classes) {
            btn.classList.add(classes);
        }

        return btn;
    }

    function onEdit(event) {
        const [nameRef, currFromDateRef, currToDateRef] = event.target.parentElement.querySelector("article").children;

        const firstName = nameRef.textContent.split(" ")[1];
        const lastName = nameRef.textContent.split(" ")[2];
        const fromDate = currFromDateRef.textContent.split(" ")[2];
        const toDate = currToDateRef.textContent.split(" ")[2];

        firstNameRef.value = firstName;
        lastNameRef.value = lastName;
        fromDateRef.value = fromDate;
        toDateRef.value = toDate;

        debugger

        infoListRef.innerHTML = "";
        nextBtn.disabled = false;
    }

    function onContinue(event) {
        const [li, editBtn, continueBtn] = event.target.parentElement.children;

        editBtn.remove();
        continueBtn.remove();

        const confirmBtn = createBtn("Confirm", "confirm-btn");
        confirmBtn.addEventListener("click", onConfirmOrCancel);

        const cancelBtn = createBtn("Cancel", "cancel-btn");
        cancelBtn.addEventListener("click", onConfirmOrCancel);

        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);

        confirmListRef.appendChild(li);
    }

    function onConfirmOrCancel(event) {
        const buttonName = event.target.textContent;

        const li = event.target.parentElement;
        li.remove();
        nextBtn.disabled = false;

        const h1 = document.getElementById("status");
        h1.textContent = buttonName == "Confirm" ? "Vacation Requested" : "Cancelled Vacation";
        h1.classList.add(buttonName == "Confirm" ? "vacation-confirmed" : "vacation-cancelled");
        h1.addEventListener("click", () => window.location.reload());
    }
}




