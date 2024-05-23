const testNums = [1, 3, 5, 2, 7, 2, 4];

function threeSum(nums: number[], k: number): number[][] {
  // Input: nums = [-1 ,0, 1, 2, -1, -4]
  // sorted -> [-4, -1, -1, 0, 1, 2]
  // Output: [[-1,-1,2],[-1,0,1]]

  //STEPS
  // sort the array for two pointer approach
  // iterate through the array of numbers
  // ** if arrayVal is the same as last arrayVal -> skip
  // two pointers
  // -> j init @ i+1
  // -> k init @ nums.len-1
  // while j < k
  // if the sum of nums @ i, j, k === 0 -> add to the aggregator
  // if the sum < 0 -> incr j (need to inc the sum)
  // if the sum > 0 -> decr k (need to inc the sum)

  // ==== 1 ====
  // -4, -1, 2 => s: -3
  // -4, -1, 2 => s: -3
  // -4, 0, 2 => s: -2
  // -4, 1, 2 => s: -1

  // ==== 2 ====
  // -1, -1, 2 => s: 0
  // proceed

  // ==== 3 ====
  // -1, 0, 2 => s: 1
  // -1, 0, 1 => s: 0
  // proceed

  const sortedNums = nums.sort((a, b): number => {
    if (a < b) return -1;
    if (b > a) return 1;
    if (a === b) return 0;
  });

  const output: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    // skip duplicate if covered in last iteration
    if (sortedNums[i] === sortedNums[i - 1] && i > 0) continue;

    // create two pointers (i +1) and arrLen
    let j = i + 1;
    let k = sortedNums.length - 1;

    while (j < k) {
      // if sum === 0 at pointers
      // push it values into output
      // advance i and j
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
      if (sum === 0) {
        output.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        j++;
        k--;
        // avoid recording same set if next number for j || k is the same as it current
        while (sortedNums[j] === sortedNums[j + 1]) j++;
        while (sortedNums[k] === sortedNums[k - 1]) k--;
      } else if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      }
    }
  }
  return output;
}

const threeSumUnique = (nums: number[], sum: number): number[][] => {
  const output = [];

  const sorted = nums.sort((a, b) => a - b); //ascending

  for (let i = 0; i < sorted.length; i++) {
    // skip duplicates
    if (sorted[i] === sorted[i - 1]) continue;
    // create window
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sumThree = sorted[i] + sorted[left] + sorted[right];
      if (sumThree === sum) {
        output.push([sorted[i], sorted[left], sorted[right]]);
        break;
      }
      if (sumThree < sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return output;
};

const threeSumExists = (nums: number[], sum: number): boolean => {
  // create a map for every number and it's position
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  // find all pairs
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // console.log("i j", nums[i], nums[j]);
      let val = sum - nums[i] + nums[j];
      // console.log("find val", val);
      if (map.get(val)) {
        // console.log("i, j, val", i, j, val);
        return true;
      }
    }
  }
  return false;
};

// console.log("3 sum exists", threeSumExists(testNums, 10));
console.log("3 sum unique", threeSumUnique(testNums, 10));
