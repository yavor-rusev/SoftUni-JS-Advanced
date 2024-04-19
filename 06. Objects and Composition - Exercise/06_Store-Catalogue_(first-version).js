function storeCatalogue(products) {
    let result = {};

    for (let line of products) {
        let [product, price] = line.split(" : ");
        price = Number(price);

        let firstLetter = product[0];

        if (!result.hasOwnProperty(firstLetter)) {
            result[firstLetter] = {};
        }

        result[firstLetter][product] = price;
    }

    let letterTuples = Object.entries(result);
    letterTuples.sort((a, b) => a[0].localeCompare(b[0]));

    letterTuples.forEach(letterData => {
        let capitalLetter = letterData[0];
        let productTuples = Object.entries(letterData[1]);
        productTuples.sort((a, b) => a[0].localeCompare(b[0]));

        console.log(capitalLetter);

        for (let [tupleName, tuplePrice] of productTuples) {
            console.log(`  ${tupleName}: ${tuplePrice}`);
        }
    })
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

// storeCatalogue([
//     'Banana : 2',
//     "Rubic's Cube : 5",
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10'
// ]);