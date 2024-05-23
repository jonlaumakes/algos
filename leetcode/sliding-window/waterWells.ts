// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49;

// make a rectangle with the largest area using any two heights

let findMaxArea = (arr: number[]): number => {
  let maxArea = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let height = Math.min(arr[left], arr[right]);
    let length = right - left;
    let area = height * length;

    console.log("area", left, right, area);

    if (area > maxArea) maxArea = area;

    if (left > right) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return maxArea;
};

let waterWellsAllArea = (arr: number[]): number => {
  let output = 0;

  // find highestLeftAtPos
  let highestLeft = 0;
  let highestLeftAtPos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestLeft) {
      highestLeft = arr[i];
    }
    highestLeftAtPos.push(highestLeft);
  }

  let highestRight = 0;
  let highestRightAtPos = Array(arr.length).fill(0);
  for (let k = arr.length - 1; k >= 0; k--) {
    if (arr[k] > highestRight) {
      highestRight = arr[k];
    }
    highestRightAtPos[k] = highestRight;
  }

  console.log(highestLeftAtPos, highestRightAtPos);

  let waterAtHeight = [];
  for (let j = 0; j < arr.length; j++) {
    let maxPossibleHeight = Math.min(highestLeftAtPos[j], highestRightAtPos[j]);
    let waterWell = maxPossibleHeight > arr[j] ? maxPossibleHeight - arr[j] : 0;
    waterAtHeight.push(waterWell);
  }

  console.log(waterAtHeight);
  return waterAtHeight.reduce((acc, height) => {
    return acc + height;
  }, 0);
};

// console.log(findMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(waterWellsAllArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
