window.addEventListener('load', solve);

function solve() {
    let firstNameRef = document.getElementById("first-name");
    let lastNameRef = document.getElementById("last-name");
    let dateInRef = document.getElementById("date-in");
    let dateOutRef = document.getElementById("date-out");
    let peopleCountRef = document.getElementById("people-count");
    let nextBthRef = document.getElementById("next-btn");

    let infoListRef = document.querySelector(".info-list");
    let confirmListRef = document.querySelector(".confirm-list");
    let reservationStatusRef = document.getElementById("verification");

    nextBthRef.addEventListener("click", onNextBth);

    function onNextBth(event) {
        event.preventDefault();

        if (firstNameRef.value === "" ||
            lastNameRef.value === "" ||
            dateInRef.value === "" ||
            dateOutRef.value === "" ||
            peopleCountRef.value === "") {
            return;
        }

        if ((new Date(dateInRef.value)).getTime() >= (new Date(dateOutRef.value)).getTime()) {
            return
        }

        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let dateIn = dateInRef.value;
        let dateOut = dateOutRef.value;
        let peopleCount = Number(peopleCountRef.value);

        let reservation = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

        infoListRef.appendChild(reservation);

        nextBthRef.parentElement.reset();
        nextBthRef.disabled = true;
    }

    function createInfo(firstName, lastName, dateIn, dateOut, peopleCount) {
        let listElement = e("li");
        listElement.className = "reservation-content";

        let article = e("article");
        listElement.appendChild(article);

        article.appendChild(e("h3", `Name: ${firstName} ${lastName}`));
        article.appendChild(e("p", `From date: ${dateIn}`));
        article.appendChild(e("p", `To date: ${dateOut}`));
        article.appendChild(e("p", `For ${peopleCount} people`));

        let editBth = e("button", "Edit");
        editBth.className = "edit-btn";
        editBth.addEventListener("click", () => onEditBtn(firstName, lastName, dateIn, dateOut, peopleCount));
        listElement.appendChild(editBth);

        let continueBth = e("button", "Continue");
        continueBth.className = "continue-btn";
        continueBth.addEventListener("click", onContinueBth.bind(null, firstName, lastName, dateIn, dateOut, peopleCount));
        listElement.appendChild(continueBth);

        return listElement
    }

    function reservationStatus(confirmed) {
        reservationStatusRef.className = confirmed ? "reservation-confirmed" : "reservation-cancelled";
        reservationStatusRef.textContent = confirmed ? "Confirmed." : "Cancelled.";

        confirmListRef.textContent = "";
        nextBthRef.disabled = false;
    }

    function onContinueBth(firstName, lastName, dateIn, dateOut, peopleCount) {
        let confirmElement = e("li");
        confirmElement.className = "reservation-content";

        let article = e("article");
        confirmElement.appendChild(article);

        article.appendChild(e("h3", `Name: ${firstName} ${lastName}`));
        article.appendChild(e("p", `From date: ${dateIn}`));
        article.appendChild(e("p", `To date: ${dateOut}`));
        article.appendChild(e("p", `For ${peopleCount} people`));

        let confirmBth = e("button", "Confirm");
        confirmBth.className = "confirm-btn";
        confirmBth.addEventListener("click", () => reservationStatus(true));
        confirmElement.appendChild(confirmBth);

        let cancelBth = e("button", "Cancel");
        cancelBth.className = "cancel-btn";
        cancelBth.addEventListener("click", reservationStatus.bind(null, false));
        confirmElement.appendChild(cancelBth);

        confirmListRef.appendChild(confirmElement);
        infoListRef.textContent = "";
    }

    function onEditBtn(firstName, lastName, dateIn, dateOut, peopleCount) {
        firstNameRef.value = firstName;
        lastNameRef.value = lastName;
        dateInRef.value = dateIn;
        dateOutRef.value = dateOut;
        peopleCountRef.value = peopleCount;

        infoListRef.textContent = "";
        nextBthRef.disabled = false;
    }

    function e(type, content) {
        let element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        return element
    }
}
