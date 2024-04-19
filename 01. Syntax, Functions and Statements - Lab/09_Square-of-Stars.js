function squareOfStars(side) {
    if (typeof side === 'undefined') {
        side = 5;
    }

    for (let row = 1; row <= side; row++) {
        console.log("* ".repeat(side));
    }
}

squareOfStars();
squareOfStars(1);
squareOfStars(2);
squareOfStars(7);