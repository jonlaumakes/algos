// INPUT IS SORTED
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

const removeDuplicatesInPlace = (arr: number[]): number[] => {
  let nextNonDuplicate = 1; // points to replacement pos in array

  // both pointers start at 1
  // i will always increment
  // check value @ i and i-1 for duplicate
  // nextNonDuplicate stores position to make replacements of non-duplicates
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
  }
  return arr.slice(0, nextNonDuplicate);
};

console.log(removeDuplicatesInPlace([2, 3, 3, 3, 6, 9, 9, 10]));
