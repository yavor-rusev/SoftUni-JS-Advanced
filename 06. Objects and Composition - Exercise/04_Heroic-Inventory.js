function heroicInventory(arr) {
    let heroes = [];

    for (let line of arr) {
        let tokens = line.split(' / ');
        let name = tokens.shift();
        let level = tokens.shift();

        let hero = {};

        if (name) {
            hero.name = name;
        }

        if (isNaN(level) === false) {
            hero.level = Number(level);
        }

        if (tokens[0]) {
            hero.items = tokens[0].split(', ').filter(x => !!x);
        } else {
            hero.items = [];
        }
        
        heroes.push(hero);
    }

    return JSON.stringify(heroes);    
}

// console.log(heroicInventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']
// ));

// console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));
console.log(heroicInventory(['Jake / 1000 / ']));
// console.log(heroicInventory(['Jake / 1000']));