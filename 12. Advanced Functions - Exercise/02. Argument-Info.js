function argumentInfo(...arr) {
    let types = {};

    for (let el of arr) {
        let elementType = typeof (el);
        console.log(`${elementType}: ${el}`);

        if (!types.hasOwnProperty(elementType)) {
            types[elementType] = 0
        }

        types[elementType] += 1;
    }

    let sortedTypes = Object.entries(types).sort((a, b) => b[1] - a[1]);
    sortedTypes.forEach(([type, count]) => console.log(`${type} = ${count}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });