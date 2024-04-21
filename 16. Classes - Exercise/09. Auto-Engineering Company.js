function autoEngineeringCompany(arr) {
    let company = new Map();

    for (let el of arr) {
        let [carBrand, model, producedCars] = el.split("|");
        producedCars = Number(producedCars);

        if (!company.has(carBrand)) {
            company.set(carBrand, new Map());
        }

        let currentBrand = company.get(carBrand);

        if (!currentBrand.has(model)) {
            currentBrand.set(model, 0);
        }

        let currentModelCarQuantity = currentBrand.get(model);
        currentBrand.set(model, currentModelCarQuantity + producedCars);
    }

    for (let [brandName, brandInfo] of company) {
        console.log(brandName.trim());
        brandInfo.forEach((totalProducedCars, carModel) => console.log(`###${carModel.trim()} -> ${totalProducedCars}`));
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);