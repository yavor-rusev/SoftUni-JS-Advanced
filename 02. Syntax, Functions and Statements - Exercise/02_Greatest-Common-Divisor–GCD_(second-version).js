function greatestCommonDivisorGCD(num1, num2) {
    let GCD = num1 % num2;

    while (GCD !== 0) {
        num1 = num2;
        num2 = GCD;
        GCD = num1 % num2;
    }

    GCD = num2;
    console.log(GCD);
}

greatestCommonDivisorGCD(15, 5);
greatestCommonDivisorGCD(2154, 458);
