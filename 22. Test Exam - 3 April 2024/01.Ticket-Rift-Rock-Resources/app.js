window.addEventListener("load", solve);

function solve() {
    const ticketsCountRef = document.getElementById("num-tickets");
    const seatingPreferenceRef = document.getElementById("seating-preference");
    const fullNameRef = document.getElementById("full-name");
    const emailRef = document.getElementById("email");
    const phoneNumberRef = document.getElementById("phone-number");
    const purchaseBtnRef = document.getElementById("purchase-btn");

    const ticketPreviewRef = document.getElementById("ticket-preview");
    const ticketPurchaseRef = document.getElementById("ticket-purchase");
    const statusDivRef = document.querySelector(".bottom-content");

    purchaseBtnRef.addEventListener("click", onPurchaseBtn);

    function onPurchaseBtn(event) {
        event.preventDefault();

        if (ticketsCountRef.value == "" ||
            seatingPreferenceRef.value == "" ||
            fullNameRef.value == "" ||
            emailRef.value == "" ||
            phoneNumberRef.value == "") {
            return
        }

        let ticketsCount = ticketsCountRef.value;
        let seatingPreference = seatingPreferenceRef.value;
        let fullName = fullNameRef.value;
        let email = emailRef.value;
        let phoneNumber = phoneNumberRef.value;

        let ticketInfo = createInfo(ticketsCount, seatingPreference, fullName, email, phoneNumber);
        ticketPreviewRef.appendChild(ticketInfo);

        ticketsCountRef.parentElement.reset();
        purchaseBtnRef.disabled = true;
    }

    function createInfo(ticketsCount, seatingPreference, fullName, email, phoneNumber) {
        let listItem = e("li");
        listItem.className = "ticket-purchase";

        let article = e("article");
        article.appendChild(e("p", `Count: ${ticketsCount}`));
        article.appendChild(e("p", `Preference: ${seatingPreference}`));
        article.appendChild(e("p", `To: ${fullName}`));
        article.appendChild(e("p", `Email: ${email}`));
        article.appendChild(e("p", `Phone Number: ${phoneNumber}`));
        listItem.appendChild(article);

        let div = e("div");
        div.className = "btn-container";

        let editBtn = e("button", "Edit");
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", () => onEditBtn(ticketsCount, seatingPreference, fullName, email, phoneNumber));
        div.appendChild(editBtn);

        let nextBtn = e("button", "Next");
        nextBtn.className = "next-btn";
        nextBtn.addEventListener("click", onNextBtn);

        div.appendChild(nextBtn);

        listItem.appendChild(div);

        return listItem
    }

    function onEditBtn(ticketsCount, seatingPreference, fullName, email, phoneNumber) {
        ticketsCountRef.value = ticketsCount;
        seatingPreferenceRef.value = seatingPreference;
        fullNameRef.value = fullName;
        emailRef.value = email;
        phoneNumberRef.value = phoneNumber;

        let listToRemove = document.querySelector(".ticket-purchase");
        listToRemove.remove();

        purchaseBtnRef.disabled = false;
    }

    function onNextBtn() {
        let listToMove = document.querySelector(".ticket-purchase");
        ticketPurchaseRef.appendChild(listToMove);

        let buttonsToRemove = document.querySelector(".btn-container");
        buttonsToRemove.remove();

        let article = listToMove.querySelector("article");

        let buyBtn = e("button", "Buy");
        buyBtn.className = "buy-btn";
        buyBtn.addEventListener("click", onBuyBtn);
        article.appendChild(buyBtn);
    }

    function onBuyBtn() {
        let listToRemove = document.querySelector(".ticket-purchase");
        listToRemove.remove();

        let h2 = e("h2", "Thank you for your purchase!");
        statusDivRef.appendChild(h2);

        let backBtn = e("button", "Back");
        backBtn.className = "back-btn";
        backBtn.addEventListener("click", onBackBtn);
        statusDivRef.appendChild(backBtn);
    }

    function onBackBtn() {
        window.location.reload()
    }

    function e(type, content) {
        let element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        return element
    }
}
