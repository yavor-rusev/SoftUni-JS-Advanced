function lowestPricesInCities(data) {
    result = {};

    for (let line of data) {
        let [town, product, price] = line.split(" | ");
        price = Number(price);

        if (!(product in result)) {
            result[product] = {
                town,
                lowestPrice: price
            };
        }

        if (price < result[product].lowestPrice) {
            result[product].town = town;
            result[product].lowestPrice = price;
        }
    }

    let entries = Object.entries(result);

    for (let [product, infoObj] of entries) {
        console.log(`${product} -> ${infoObj.lowestPrice} (${infoObj.town})`);
    }
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
