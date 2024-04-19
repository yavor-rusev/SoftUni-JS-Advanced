function toggle() {
    let buttonRef = document.getElementsByClassName("button")[0];
    let textBoxRef = document.getElementById("extra");

    let buttonText = buttonRef.textContent;

    if (buttonText === 'More') {
        textBoxRef.style.display = "block";
        buttonRef.textContent = 'Less';
    } else if (buttonText === 'Less') {
        textBoxRef.style.display = "none";
        buttonRef.textContent = 'More';
    }
}