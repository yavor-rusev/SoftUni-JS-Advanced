function breakfastRobot(data) {
    let recipies = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    let elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function instructionExecutor(data) {
        let tokens = data.split(" ");
        let action = tokens.shift();

        switch (action) {
            case "restock": return restock(tokens);
            case "prepare": return prepare(tokens);
            case "report": return report();
        }
    }

    function restock(tokens) {
        let [element, quantity] = tokens;
        elements[element] += Number(quantity);
        return "Success";
    }

    function prepare(tokens) {
        let [recipe, count] = tokens;
        let totalElementsNeeded = {};
        let currentRecipe = recipies[recipe];

        for (let [ingredient, quantity] of Object.entries(currentRecipe)) {
            totalElementsNeeded[ingredient] = quantity * Number(count);
        }

        for (let [element, quantityNeeded] of Object.entries(totalElementsNeeded)) {
            if (elements[element] < quantityNeeded) {
                return `Error: not enough ${element} in stock`;
            }

            elements[element] -= quantityNeeded;
        }

        return "Success";
    }

    function report() {
        return `protein=${elements.protein} carbohydrate=${elements.carbohydrate} fat=${elements.fat} flavour=${elements.flavour}`;
    }

    return instructionExecutor;
}

let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

