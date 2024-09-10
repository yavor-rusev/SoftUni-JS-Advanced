class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (!model || year < 1950 || mileage < 0 || price < 0) {
            throw new Error("Invalid car!");
        }

        this.availableCars.push({ model, year, mileage, price });
        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredYear) {
        const currentCar = this.availableCars.find(car => car.model == model);

        if (!currentCar) {
            return `${model} was not found!`
        }

        let soldPrice;

        if (currentCar.year >= desiredYear) {
            soldPrice = currentCar.price;
        } else if (desiredYear - currentCar.year <= 5) {
            soldPrice = currentCar.price * 0.90;
        } else if (desiredYear - currentCar.year > 5) {
            soldPrice = currentCar.price * 0.80;
        }

        this.availableCars = this.availableCars.filter(car => car.model != model);

        currentCar.price = soldPrice;
        this.soldCars.push(currentCar);

        this.revenue += soldPrice;

        return `${currentCar.model} (${currentCar.year}) was sold for ${soldPrice.toFixed(2)}$`
    }

    prepareCarForSale(model) {
        const currentCar = this.availableCars.find(car => car.model == model);

        if (!currentCar) {
            return `${model} was not found for preparation!`
        }

        currentCar.mileage *= 0.50;
        currentCar.price *= 1.30; 

        return `${currentCar.model} (${currentCar.year}) is prepared for sale with ${currentCar.mileage} km. - ${currentCar.price.toFixed(2)}$`;
    }

    salesJournal(criteria) {
        if (criteria != "year" && criteria != "model") {
            throw new Error("Invalid criteria!");
        }

        if (criteria == "year") {
            this.soldCars.sort((carA, carB) => carB.year - carA.year)
        }

        if (criteria == "model") {
            this.soldCars.sort((carA, carB) => carA.model.localeCompare(carB.model));
        }

        let buff = `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`
        buff += `\n${this.soldCars.length} cars sold:`
        this.soldCars.map(car => buff += `\n${car.model} (${car.year}) / ${car.mileage} km. / ${car.price.toFixed(2)}$`)

        return buff;
    }
}

try {
    const dealership = new ShadyCarDealership('Shady Motors');
    console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
    console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
    console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
    console.log(dealership.prepareCarForSale('Honda CR-V'));
    console.log(dealership.prepareCarForSale('BMW X3'));
    console.log(dealership.sellCar('Honda CR-V', 2012));
    console.log(dealership.sellCar('BMW X3', 2012));
    console.log(dealership.salesJournal('model'));



} catch (err) {
    console.log(err.message);

}



