function validate() {
    const inputRef = document.getElementById("email");
    inputRef.addEventListener("change", validateEmail);

    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function validateEmail(event) {
        let inputText = event.currentTarget.value;

        if (!inputText.match(regex)) {
            inputRef.classList.add("error");
        } else {
            inputRef.classList.remove("error");
        }
    }
}