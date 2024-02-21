// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].
var arr = [2, 1, 5, 1, 3, 2];
var max_sub_array_of_size_k = function (arr, k) {
    var maxSubArray = [];
    var maxSum = 0;
    // create a sliding window
    // start
    // end
    // iterate through arr
    // if end >= k
    // add the end val
    // compare the sum to the max and replace if > maxSum
    // reduce the maxSum by the start val
    // advance start
    var start = 0;
    var end = arr.length - 1;
    var sum = 0;
    for (var end_1 = 0; end_1 < arr.length; end_1++) {
        if (end_1 >= k) {
            sum += arr[end_1];
            if (sum > maxSum) {
                maxSum = sum;
                console.log('new maxSum', maxSum, start, end_1);
                var subArray = [];
                for (var i = start; i < end_1; i++) {
                    subArray.push(arr[i]);
                }
                maxSubArray = subArray;
            }
            maxSum -= arr[start];
            start++;
        }
    }
    return maxSubArray;
};
console.log(max_sub_array_of_size_k(arr, 3));
