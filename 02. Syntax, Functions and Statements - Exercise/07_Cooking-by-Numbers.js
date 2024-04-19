function cookingByNumbers(numAsString, ...commandsArray) {
    let num = Number(numAsString);

    let operationsObj = {
        chop: num => num / 2,
        dice: num => num = Math.sqrt(num),
        spice: num => num = num + 1,
        bake: num => num * 3,
        fillet: num => num * 0.80
    }

    commandsArray.forEach(command => console.log(num = operationsObj[command](num)));
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');