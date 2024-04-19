function townsToJSON(data) {
    let result = [];

    let [key1, key2, key3] = data[0].split("|").map(x => x.trim()).filter(x => !!x);

    for (let i = 1; i < data.length; i++) {
        let tokens = data[i].split("|").map(x => x.trim()).filter(x => !!x);

        let town = tokens[0];
        let latitudeAsFixedString = Number(tokens[1]).toFixed(2);
        let longitudeAsFixedString = Number(tokens[2]).toFixed(2);

        result.push({
            [key1]: town,
            [key2]: Number(latitudeAsFixedString),
            [key3]: Number(longitudeAsFixedString)
        });
    }

    console.log(JSON.stringify(result));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);

// townsToJSON([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'
// ]);
