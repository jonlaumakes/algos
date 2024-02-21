// assume ascending
var searchCeilingOfANumber = function (arr, k) {
    // if the largest number < k -> -1
    var arrLength = arr.length;
    if (arr[arrLength - 1] < k) {
        return -1;
    }
    // binary search
    // if the number === k -> return mid
    // edge cases: the last number OR the first number IS LESS THAN k ->
    // a) start, middle, end will all be at the same index
    // b) end = start -1
    var start = 0;
    var end = arrLength - 1;
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        var num = arr[mid];
        if (num === k) {
            return mid;
        }
        if (k > num) {
            start = mid + 1;
        }
        else if (k < num) {
            end = mid - 1;
        }
    }
    return start;
};
console.log(searchCeilingOfANumber([4, 6, 10], 6)); // 1
console.log(searchCeilingOfANumber([1, 3, 8, 10, 15], 12)); // 4
console.log(searchCeilingOfANumber([4, 6, 10], 17)); // -1
console.log(searchCeilingOfANumber([4, 6, 10], -1)); // 0
