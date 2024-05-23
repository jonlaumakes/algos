// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

const findSmallestSubArray = (arr: number[], x: number): number => {
  let minLen = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    if (sum >= x) {
      // shrink window until sum < x
      while (sum >= x) {
        const winLen = right - left + 1;
        if (winLen < minLen) minLen = winLen;
        sum -= arr[left];
        left += 1;
      }
    }
  }

  if (minLen === Infinity) return 0;
  return minLen;
};
console.log(findSmallestSubArray([2, 1, 5, 2, 3, 2], 7));
