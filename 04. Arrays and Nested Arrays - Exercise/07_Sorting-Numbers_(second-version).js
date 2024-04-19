function sortingNumbers(arr) {
    let result = [];

    while (arr.length > 0) {
        result.push(...arr.splice(arr.indexOf(Math.min(...arr)), 1));
        arr.length ? result.push(...arr.splice(arr.indexOf(Math.max(...arr)), 1)) : null;
    }

    return result;
}


console.log(sortingNumbers([1, 65, 3, 52, 48, 2, 63, 31, -3, 18, 56]));
// console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));

