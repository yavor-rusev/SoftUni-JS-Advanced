function magicMatrices(arr) {
    let isMagical = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].reduce((acc, num) => acc += num, 0) !== arr[i + 1].reduce((acc, num) => acc += num, 0)) {
            isMagical = false;
        }

        if (arr.reduce((acc, row) => acc += row[i], 0) !== arr.reduce((acc, row) => acc += row[i + 1], 0)) {
            isMagical = false;
        }
    }

    console.log(isMagical);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);