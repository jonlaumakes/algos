var floorOfNumber = function (arr, k) {
    var arrLength = arr.length;
    // if k < smallest number
    if (k < arr[0]) {
        return -1;
    }
    // binary search
    // if the number is first or last in arr -> Positions: end = start -1
    var start = 0;
    var end = arrLength - 1;
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        var num = arr[mid];
        if (k === num) {
            return mid;
        }
        if (k > num) {
            start = mid + 1;
        }
        else if (k < num) {
            end = mid - 1;
        }
    }
    return end;
};
console.log(floorOfNumber([4, 6, 10], 6));
console.log(floorOfNumber([1, 3, 8, 10, 15], 12));
console.log(floorOfNumber([4, 6, 10], 17));
console.log(floorOfNumber([4, 6, 10], -1));
