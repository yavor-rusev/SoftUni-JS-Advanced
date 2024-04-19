function extractIncreasingSubsequenceFromArray(arr) {
    let biggestNum = arr.shift();

    let result = [];
    result.push(biggestNum);

    for (let num of arr) {
        if (num >= biggestNum) {
            result.push(num);
            biggestNum = num;
        }
    }

    return result;
}

console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));
