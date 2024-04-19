function sortingNumbers(arr) {
    let result = [];

    arr.sort((a, b) => a - b);

    while (arr.length > 0) {
        result.push(arr.shift());
        arr.length ? result.push(arr.pop()) : null;
    }

    return result;
}


console.log(sortingNumbers([1, 65, 3, 52, 48, 2, 63, 31, -3, 18, 56]));
// console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));

