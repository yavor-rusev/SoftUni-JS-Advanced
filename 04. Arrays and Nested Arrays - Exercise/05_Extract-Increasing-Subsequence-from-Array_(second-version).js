function extractIncreasingSubsequenceFromArray(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let result = [];

    arr.forEach(x => {
        if (x >= biggestNum) {
            result.push(x);
            biggestNum = x;
        }
    });

    return result;
}

console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));
