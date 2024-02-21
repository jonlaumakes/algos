var is_happy_number = function (num) {
    // a happy number's sum of squares (each digit) will keep returning 1 after a while
    // 23 -> 4+9 = 13 -> 2 + 9 = 10 => 1 + 0 = 1 ...
    // !happy: loop when summing the squares of the digits
    // Approach -> determine if there is a loop by iterating fast and slow pointers
    // if they meet:
    // there is a cycle
    // slow and fast are both stuck at 1
    var slow = num;
    var fast = num;
    while (true) {
        fast = sumOfSquares(sumOfSquares(fast));
        slow = sumOfSquares(fast);
        if (fast === slow) {
            break;
        }
        return slow === 1;
    }
};
var sumOfSquares = function (number) {
    // 23 -> 3
    var sum = 0;
    while (number > 0) {
        var digit = number % 10;
        sum += Math.pow(digit, 2);
        number = Math.floor(number / 10);
    }
    return sum;
};
console.log('sum of squares', sumOfSquares(23));
console.log('23 T', is_happy_number(23));
console.log('12 F', is_happy_number(12));
