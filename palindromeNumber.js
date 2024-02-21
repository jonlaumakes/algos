var testNum = 32123;
var testNum1 = 321123;
var isPalindrome = function (x) {
    var aggregator = 0;
    var inputNum = x;
    // get the remainder of the number % 10
    // change the number to quotient
    while (inputNum > 0) {
        var remainder = inputNum % 10;
        aggregator = aggregator * 10 + remainder;
        console.log('aggregator', aggregator);
        inputNum = Math.floor(inputNum / 10);
        console.log('inputNum', inputNum);
    }
    return aggregator;
};
console.log(isPalindrome(testNum));
