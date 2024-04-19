function carFactory(order) {
    let engineEnum = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
    }

    let result = {
        model: order.model,
        engine: null,
        carriage: {
            type: order.carriage,
            color: order.color
        },
        wheels: null
    }
    
    if (order.power <= 90) {
        result.engine = engineEnum['Small engine']
    } else if (order.power <= 120) {
        result.engine = engineEnum['Normal engine']
    } else {
        result.engine = engineEnum['Monster engine']
    }
    
    let wheels = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
    result.wheels = new Array(4).fill(wheels);

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
