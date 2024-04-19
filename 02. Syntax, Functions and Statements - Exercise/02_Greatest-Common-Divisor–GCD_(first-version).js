function greatestCommonDivisorGCD(num1, num2) {
    let divider = Math.min(num1, num2);

    while (divider > 0) {
        if (num1 % divider === 0 && num2 % divider === 0) {
            console.log(divider);
            return;
        }

        divider--;
    }
}

greatestCommonDivisorGCD(15, 5);
greatestCommonDivisorGCD(2154, 458);