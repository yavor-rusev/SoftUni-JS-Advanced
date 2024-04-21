function functionalSum(furstInvokeNum) {
    let sum = furstInvokeNum;

    function add(currentInvokeNum) {
        sum += currentInvokeNum;
        return add;
    }
    
    add.toString = function () {
        return sum.toString();
    };

    return add;
}

console.log(functionalSum(1)(6)(-3).toString()); // Output: 4


