var findRange = function (arr, k) {
    // binary search for k
    // after found
    // find first occurance by decr index
    // find last occurance by inc index
    var binarySearchIdx = binarySearch(arr, k);
    if (binarySearchIdx === -1) {
        return [-1, -1];
    }
    return [findOccurance(arr, k, binarySearchIdx, false), findOccurance(arr, k, binarySearchIdx, true)];
};
var findOccurance = function (arr, target, i, findMax) {
    while (arr[i] === target) {
        if (findMax) {
            i++;
        }
        else {
            i--;
        }
    }
    return findMax ? i - 1 : i + 1;
};
var binarySearch = function (arr, k) {
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        var mid = Math.floor(start + (end - start) / 2);
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
    return -1;
};
// console.log('findMax', findOccurance([1,2,6,6,6,6], 6, 3, true));
// console.log('findFirst', findOccurance([1,2,6,6,6,6], 6, 3, false));
console.log(findRange([1, 2, 6, 6, 6, 6], 6)); // [2,5]
console.log(findRange([1, 1, 1, 1, 2, 6, 6, 10], 1)); // [0,3]
