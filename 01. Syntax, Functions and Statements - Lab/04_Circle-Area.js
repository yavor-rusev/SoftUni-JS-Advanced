function circleArea(param) {
    if (typeof param === 'number') {
        let area = Math.pow(param, 2) * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof param}.`);
    }
}

circleArea(5);
circleArea('name');