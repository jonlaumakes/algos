// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].
const arr = [2, 1, 5, 1, 3, 2];

const max_sub_array_of_size_k = (arr: number[], k: number): number[] => {
    let maxSubArray: number[] = [];
    let maxSum = 0;

    // create a sliding window
        // start
        // end
        // iterate through arr
        // if end >= k
            // add the end val
            // compare the sum to the max and replace if > maxSum
            // reduce the maxSum by the start val
            // advance start

    let start = 0;
    let end = arr.length -1;
    let sum = 0;

    for (let end = 0; end < arr.length; end++) {
        if (end >= k) {
            sum += arr[end];
            if (sum > maxSum) {
                maxSum = sum;
                console.log('new maxSum', maxSum, start, end);
                let subArray = [];
                for (let i = start; i < end; i++) {
                    subArray.push(arr[i]);
                }
                maxSubArray = subArray;
            }
            maxSum -= arr[start];
            start ++;
        }
    }

    return maxSubArray;
};

console.log(max_sub_array_of_size_k(arr, 3));