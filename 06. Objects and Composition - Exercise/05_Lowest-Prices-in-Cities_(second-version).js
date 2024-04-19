function lowestPricesInCities(data) {
    result = [];

    for (let line of data) {
        let [town, product, price] = line.split(" | ");
        price = Number(price);

        let hasProduct = false;

        for (let tuple of result) {
            if (tuple[0] === product) {
                hasProduct = true;
            }
        }

        if (hasProduct === false) {
            result.push([product, {
                town,
                lowestPrice: price
            }]);
        }

        for (let tuple of result) {
            if (tuple[0] === product && tuple[1].lowestPrice > price) {
                tuple[1].town = town;
                tuple[1].lowestPrice = price;
            }
        }

    }

    for (let [product, infoObj] of result) {
        console.log(`${product} -> ${infoObj.lowestPrice} (${infoObj.town})`);
    }
}

// lowestPricesInCities([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
// ]);

lowestPricesInCities([
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
]);
