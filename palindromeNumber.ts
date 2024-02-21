const testNum = 32123;
const testNum1 = 321123;

const isPalindrome = (x: number) => {
    let aggregator: number = 0;
    let inputNum = x;

    // get the remainder of the number % 10
    // change the number to quotient
    while (inputNum > 0) {
        const remainder = inputNum % 10;
        aggregator = aggregator * 10 + remainder;
        inputNum = Math.floor(inputNum / 10);
    }

    return aggregator === x;
}

console.log(isPalindrome(testNum));