function sumOfNumbersFromNtoM(m, n) {
    let num1 = +m;
    let num2 = +n;
    let sum = 0;

    for (let currNum = num1; currNum <= num2; currNum++) {
        sum += currNum;
    }

    return sum;
}

console.log(sumOfNumbersFromNtoM('1', '5'));
console.log(sumOfNumbersFromNtoM('-8', '20'));