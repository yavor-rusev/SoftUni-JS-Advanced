function storeCatalogue(products) {
    let result = [];

    for (let line of products) {
        let [product, price] = line.split(" : ");
        price = Number(price);

        result.push([product, price]);
    }

    result.sort((tupleA, tupleB) => tupleA[0].localeCompare(tupleB[0]));

    let lastCapitalLetter = '';

    for (let [product, price] of result) {
        if (product[0] !== lastCapitalLetter) {
            console.log(product[0]);
        }

        console.log(`  ${product}: ${price}`);
        lastCapitalLetter = product[0];
    }
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