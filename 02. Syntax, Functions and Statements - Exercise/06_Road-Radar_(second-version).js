function roadRadar(speed, area) {
    let limitsObj = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (speed <= limitsObj[area]) {
        console.log(`Driving ${speed} km/h in a ${limitsObj[area]} zone`);

    } else {
        let overLimit = speed - limitsObj[area];
        let status = '';

        if (overLimit <= 20) {
            status = 'speeding';

        } else if (overLimit <= 40) {
            status = 'excessive speeding';

        } else {
            status = 'reckless driving';

        }

        console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limitsObj[area]} - ${status}`);
    };
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');