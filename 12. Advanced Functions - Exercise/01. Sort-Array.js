function sortArray(arr, sortType) {
    let sortEnum = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }

    return arr.sort(sortEnum[sortType]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));