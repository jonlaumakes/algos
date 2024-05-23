// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
// Input: [-2, -1, 0, 2, 3];
// Output: [0, 1, 4, 4, 9];

const squareSortedNums = (arr: number[]) => {
  // set left and right pointers at both ends
  let left = 0;
  let right = arr.length - 1;

  let output = Array(arr.length).fill(0);
  let outputPos = arr.length - 1;
  // compare the square of each and move pointers based on which one was used to populate the array
  while (left <= right) {
    const leftSqr = arr[left] * arr[left];
    const rightSqr = arr[right] * arr[right];

    if (leftSqr >= rightSqr) {
      output[outputPos] = leftSqr;
      left += 1;
    }

    if (rightSqr > leftSqr) {
      output[outputPos] = rightSqr;
      right -= 1;
    }
    outputPos -= 1;
  }

  return output;
};

console.log(squareSortedNums([-2, -1, 0, 2, 3]));
console.log(squareSortedNums([3, -2, -1, 0, 2, 3]));
