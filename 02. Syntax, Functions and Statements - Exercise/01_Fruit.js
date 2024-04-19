function fruit(fr, weight, price) {
    let kilos = weight / 1000;
    let money = kilos * price;

    console.log(`I need $${money.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fr}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);