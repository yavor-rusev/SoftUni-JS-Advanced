function validityChecker(x1, y1, x2, y2) {
    function distancChecker(a1, b1, a2, b2) {
        let distance = Math.sqrt(Math.pow(a2 - a1, 2) + Math.pow(b2 - b1, 2));

        if (distance === Math.trunc(distance)) {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is valid`);
        } else {
            console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is invalid`);
        }
    }

    distancChecker(x1, y1, 0, 0);
    distancChecker(x2, y2, 0, 0);
    distancChecker(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);