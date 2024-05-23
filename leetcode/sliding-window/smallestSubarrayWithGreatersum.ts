// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

let findSmallest = (arr: number[], x: number): number => {
  let smallest = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    // shrink the window
    while (sum >= x) {
      const winLen = right - left + 1;
      if (winLen < smallest) {
        smallest = winLen;
      }

      const removeNum = arr[left];
      sum -= removeNum;
      left += 1;
    }
  }

  return smallest;
};

console.log(findSmallest([2, 1, 5, 2, 3, 2], 7));
