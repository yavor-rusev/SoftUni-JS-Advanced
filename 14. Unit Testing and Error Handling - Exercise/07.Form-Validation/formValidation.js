function validate() {
    const nameRef = document.getElementById("username");
    const emailRef = document.getElementById("email");
    const passwordRef = document.getElementById("password");
    const confirmPassRef = document.getElementById("confirm-password");
    const companyNumberRef = document.getElementById("companyNumber");

    const checkboxRef = document.getElementById("company");
    const submitBtnRef = document.getElementById("submit");

    const companyFieldRef = document.getElementById("companyInfo");
    const validationDivRef = document.getElementById("valid");

    let namePattern = /^[a-zA-Z0-9]{3,20}$/;
    let passwordPattern = /^[\w]{5,15}$/;
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    let companyNumberpattern = /^[1-9][0-9]{3}$/;

    let inputsArray = [nameRef, emailRef, passwordRef, confirmPassRef, companyNumberRef];
    let patternsArray = [namePattern, emailPattern, passwordPattern, passwordPattern, companyNumberpattern];

    checkboxRef.addEventListener("change", manageCompanyFieldset);
    submitBtnRef.addEventListener("click", submitOnclickHandler);

    function manageCompanyFieldset(event) {
        if (!event.currentTarget.checked) {
            companyFieldRef.style.display = "none";
        } else {
            companyFieldRef.style.display = "block";
        }
    }

    function submitOnclickHandler(event) {
        event.preventDefault();        

        let isChecked = checkboxRef.checked;
        let isValid = true;

        for (let i = 0; i < 4 + isChecked; i++) {
            if (!inputsArray[i].value.match(patternsArray[i])) {
                inputsArray[i].style.border = "";
                inputsArray[i].style.borderColor = "red";
                isValid = false;
            } else {
                inputsArray[i].style.border = "none";
            }
        }

        if (inputsArray[2].value !== inputsArray[3].value) {
            inputsArray[2].style.border = "";
            inputsArray[2].style.borderColor = "red";
            inputsArray[3].style.border = "";
            inputsArray[3].style.borderColor = "red";
            isValid = false;
        }

        if (isValid) {
            validationDivRef.style.display = "block";
        } else {
            validationDivRef.style.display = "none";
        }
    }
}
