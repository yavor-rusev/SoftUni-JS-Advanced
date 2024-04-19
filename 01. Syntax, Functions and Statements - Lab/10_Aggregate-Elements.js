function aggregateElements(arr) {
    let sum = arr.reduce((acc, val) => acc + val);
    console.log(sum);

    let sumInversedValues = arr.reduce((acc, val) => acc + 1 / val, 0);
    console.log(sumInversedValues);

    let concat = arr.reduce((acc, val) => (acc + '') + val);
    console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);