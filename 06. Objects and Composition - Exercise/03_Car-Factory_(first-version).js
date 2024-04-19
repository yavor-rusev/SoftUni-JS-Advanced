function carFactory(order) {
    let engineEnum = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
    }

    let engine = {};

    if (order.power <= 90) {
        engine = engineEnum['Small engine']
    } else if (order.power <= 120) {
        engine = engineEnum['Normal engine']
    } else {
        engine = engineEnum['Monster engine']
    }

    let wheels = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;

    let result = {
        model: order.model,
        power: engine,
        carriage: {
            type: order.carriage,
            color: order.color
        },
        wheels: new Array(4).fill(wheels)
    }

    return result;
}

console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log(carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));
