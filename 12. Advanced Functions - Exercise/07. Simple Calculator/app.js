function calculator() {
    let numberOneInputRef = null;
    let numberTwoInputRef = null;
    let resultFieldRef = null;

    return {
        init(selector1, selector2, resultSelector) {
            numberOneInputRef = document.querySelector(selector1);
            numberTwoInputRef = document.querySelector(selector2);
            resultFieldRef = document.querySelector(resultSelector);
        },

        add() {
            resultFieldRef.value = Number(numberOneInputRef.value) + Number(numberTwoInputRef.value);
        },

        subtract() {
            resultFieldRef.value = Number(numberOneInputRef.value) - Number(numberTwoInputRef.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





