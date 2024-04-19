function subtract() {
    let firstNumRef = document.getElementById("firstNumber");
    let secondNumRef = document.getElementById("secondNumber");
    let resultRef = document.getElementById("result");

    let firstNumber = Number(firstNumRef.value);
    let secondNumber = Number(secondNumRef.value);
    let result = firstNumber - secondNumber;

    resultRef.textContent = result;
}