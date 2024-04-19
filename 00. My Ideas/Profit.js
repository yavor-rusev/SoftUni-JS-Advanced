function profit(notes1lv, notes2lv, notes5lv, sum) {
    for (let x = 0; x <= notes1lv; x++) {
        let counter1lv = 0;
        let counter2lv = 0;
        let counter5lv = 0;

        if (x * 1 > sum) {
            break;
        }

        counter1lv = x;

        if (x * 1 === sum) {
            console.log(`${counter1lv} * 1 lv. + ${counter2lv} * 2 lv. + ${counter5lv} * 5 lv. = ${sum} lv.`);

        } else {
            let rest1 = sum - (x * 1);

            for (let y = 0; y <= notes2lv; y++) {

                if (y * 2 > rest1) {
                    break;
                }

                counter2lv = y;

                if ((y * 2) === rest1) {
                    console.log(`${counter1lv} * 1 lv. + ${counter2lv} * 2 lv. + ${counter5lv} * 5 lv. = ${sum} lv.`);

                } else if (rest1 > 0) {
                    let rest2 = rest1 - (y * 2);

                    for (let z = 0; z <= notes5lv; z++) {
                        let counter5lv = z;

                        if ((z * 5) === rest2) {
                            console.log(`${counter1lv} * 1 lv. + ${counter2lv} * 2 lv. + ${counter5lv} * 5 lv. = ${sum} lv.`);

                        } else if ((z * 5) > rest2) {
                            break;
                        }
                    }
                }
            }
        }
    }
}

// profit(3, 2, 3, 10);
// profit(5, 3, 1, 7);
profit(11, 6, 3, 9);