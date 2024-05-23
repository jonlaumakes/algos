const testHeights = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const maxArea = (heights: number[]): number => {
  // https://leetcode.com/problems/container-with-most-water/description/
  let left: number = 0;
  let right: number = heights.length - 1;
  let maxArea = 0;

  // l [8,3]-> r [8,8]-> l [8,8]
  // walk the pointers towards each other while left < right
  while (left < right) {
    const maxHeight =
      heights[left] > heights[right] ? heights[right] : heights[left];
    const calcArea = maxHeight * (right - left);

    if (calcArea > maxArea) maxArea = calcArea;

    // if left > right -> move right Idx left
    if (heights[left] < heights[right]) {
      left += 1;
    } else {
      // opposite or equal -> move left right
      right -= 1;
    }
  }

  return maxArea;
};

console.log(maxArea(testHeights));

const waterWells = (heights: number[]): number => {
  const area: number = 0;

  const highestLeftAtIdx: number[] = [];
  let highestLeft = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > highestLeft) highestLeft = heights[i];
    highestLeftAtIdx.push(highestLeft);
  }

  const reverseHighestRightAtIdx: number[] = [];
  let highestRight = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > highestRight) highestRight = heights[i];
    reverseHighestRightAtIdx.push(highestRight);
  }

  const highestRightAtIdx: number[] = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    highestRightAtIdx.push(reverseHighestRightAtIdx[i]);
  }

  return area;
};
