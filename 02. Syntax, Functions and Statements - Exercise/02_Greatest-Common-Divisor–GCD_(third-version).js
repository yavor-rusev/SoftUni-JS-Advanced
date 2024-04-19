function greatestCommonDivisorGCD(num1, num2) {
    for (let i = Math.min(num1, num2); i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i;
        }
    }
}

console.log(greatestCommonDivisorGCD(15, 5));
console.log(greatestCommonDivisorGCD(2154, 458));

