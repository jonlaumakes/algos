// 4, 6, 10
var binary_search = function (numbers, k) {
    var start = 0;
    var end = numbers.length - 1;
    var isAscending = numbers[0] < numbers[numbers.length - 1];
    // while true
    // find the center
    // if the center === k -> return i
    // if center < k
    // left = center
    // right remains
    // center is between new left and right
    // console.log('end', start, end);
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        var currentNumber = numbers[mid];
        if (currentNumber === k)
            return mid;
        if (isAscending) {
            if (currentNumber < k)
                start = mid + 1;
            if (currentNumber > k)
                end = mid - 1;
        }
        else {
            if (currentNumber < k)
                end = mid - 1;
            if (currentNumber > k)
                start = mid + 1;
        }
    }
    return -1;
};
console.log(binary_search([4, 6, 10], 10));
console.log(binary_search([1, 2, 3, 4, 7, 8, 9], 5));
console.log(binary_search([10, 6, 4], 10));
console.log(binary_search([10, 6, 4], 4));
