function fibonacci() {
    let firstNum = 0;
    let secondNum = 1;

    return () => {
        let fibonacciNum = secondNum;

        let sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;

        return fibonacciNum;
    }
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); 
