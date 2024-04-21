function juiceFlavors(arr) {
    let juices = {};
    let bottles = new Map;

    for (let item of arr) {
        let [flavor, quantity] = item.split(" => ");

        if (!juices.hasOwnProperty(flavor)) {
            juices[flavor] = 0;
        }

        juices[flavor] += Number(quantity);

        if (juices[flavor] >= 1000) {
            if (!bottles.has(flavor)) {
                bottles.set(flavor, 0);
            }

            let currentFlavorBottles = bottles.get(flavor);
            bottles.set(flavor, currentFlavorBottles + Math.floor(juices[flavor] / 1000));
            juices[flavor] %= 1000;
        }
    }

    bottles.forEach((bottles, flavor) => console.log(`${flavor} => ${bottles}`));
}

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);
