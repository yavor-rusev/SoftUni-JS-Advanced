class BikeRentalService {
    constructor(n, l) {
        this.name = n;
        this.location = l;
        this.availableBikes = [];
    }

    addBikes(bikes) {
        for (let data of bikes) {
            let [brand, quantity, price] = data.split("-");
            quantity = Number(quantity);
            price = Number(price);

            let hasBrand = this.availableBikes.find(obj => obj.brand == brand);

            if (!hasBrand) {
                this.availableBikes.push({
                    brand,
                    quantity,
                    price
                })

            } else {
                hasBrand.quantity += quantity;

                if (price > hasBrand.price) {
                    hasBrand.price = price
                }
            }
        }

        let result = "Successfully added ";
        let brands = [];
        this.availableBikes.forEach(obj => brands.push(obj.brand));

        return result + brands.join(", ");
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;
        let unavailable = false;

        for (let data of selectedBikes) {
            let [rentBrand, rentQuantity] = data.split("-");
            rentQuantity = Number(rentQuantity);

            let hasBrand = this.availableBikes.find(obj => obj.brand == rentBrand);

            if (!hasBrand || hasBrand.quantity < rentQuantity) {
                unavailable = true;
            } else {
                hasBrand.quantity -= rentQuantity;
                totalPrice += rentQuantity * hasBrand.price;
            }
        }

        if (unavailable) {
            return `Some of the bikes are unavailable or low on quantity in the bike rental service.`
        } else {
            return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`
        }
    }

    returnBikes(returnedBikes) {
        let notInSelection = false;

        for (let data of returnedBikes) {
            let [returnedBrand, returnedQuantity] = data.split("-");
            returnedQuantity = Number(returnedQuantity);

            let hasBrand = this.availableBikes.find(obj => obj.brand == returnedBrand);

            if (!hasBrand) {
                notInSelection = true;
            } else {
                hasBrand.quantity += returnedQuantity;
            }
        }

        if (notInSelection) {
            return "Some of the returned bikes are not from our selection."
        } else {
            return "Thank you for returning!"
        }
    }

    revision() {
        this.availableBikes.sort((a, b) => a.price - b.price);

        let result = "Available bikes:";
        this.availableBikes.forEach(bike => result += `\n${bike.brand} quantity:${bike.quantity} price:$${bike.price}`);
        result += `\nThe name of the bike rental service is ${this.name}, and the location is ${this.location}.`

        return result;
    }
}



const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());

/*
 Successfully added Mountain Bike, City Bike, Electric Bike 
 Enjoy your ride! You must pay the following amount $1250.00.
 Thank you for returning! 
 Available bikes:
 City Bike quantity:8 price:$100
 Mountain Bike quantity:1 price:$150
 Electric Bike quantity:11 price:$400
 The name of the bike rental service is MyBikes, and the location is CityCenter.
 */
