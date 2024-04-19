function sameNumbers(num) {
    let digitsArray = num.toString().split("").map(Number);
    let resultArray = digitsArray.filter((x, i, self) => x === self[0]);
    let isSame = digitsArray.length === resultArray.length;
    let sum = digitsArray.reduce((val, acc) => val += acc, 0);

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);