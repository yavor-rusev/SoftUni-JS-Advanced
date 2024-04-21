function attachEventsListeners() {
    let buttonsRefsArray = Array.from(document.querySelectorAll('[value="Convert"]'));
    buttonsRefsArray.forEach(btn => btn.addEventListener("click", onClickConverter));

    function onClickConverter(event) {
        let clickedButtonId = event.target.id;
        let currInputRef = event.target.parentElement.children[1];
        let currInputValue = currInputRef.value;

        switch (clickedButtonId) {
            case "daysBtn": appendValues(currInputValue); break;
            case "hoursBtn": appendValues(currInputValue / 24); break;
            case "minutesBtn": appendValues(currInputValue / 24 / 60); break;
            case "secondsBtn": appendValues(currInputValue / 24 / 60 / 60); break;
        }
    }

    function appendValues(days) {
        let inputsRefsArray = Array.from(document.querySelectorAll('[type="text"]'));

        inputsRefsArray[0].value = days;
        inputsRefsArray[1].value = days * 24;
        inputsRefsArray[2].value = days * 24 * 60;
        inputsRefsArray[3].value = days * 24 * 60 * 60;
    }
}