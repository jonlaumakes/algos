// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

let maxSumSubarray = (arr: number[], k: number): number => {
  let output = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    let windowLen = right - left + 1;

    if (windowLen > k) {
      const removeNum = arr[left];
      sum -= removeNum;
      left += 1;
    }
    if (sum > output) {
      output = sum;
    }
  }

  return output;
};

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));
console.log(maxSumSubarray([2, 3, 4, 1, 5], 2));
