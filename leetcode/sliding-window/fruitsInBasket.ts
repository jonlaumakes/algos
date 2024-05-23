// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

let getFruits = (arr: string[]): number => {
  let max = 0;
  let map = {};
  let left = 0;
  // iterate
  for (let right = 0; right < arr.length; right++) {
    const fruit = arr[right];
    // add fruit to freqMap
    if (!(fruit in map)) {
      map[fruit] = 0;
    }
    map[fruit] += 1;

    // while (fruits in map > 2)
    while (Object.keys(map).length > 2) {
      // remove left fruit from map
      const removeFruit = arr[left];
      delete map[removeFruit];
      left += 1;
    }

    if (right - left + 1 > max) {
      max = right - left + 1;
    }
  }

  return max;
};

console.log(getFruits(["A", "B", "C", "A", "C"]));
console.log(getFruits(["A", "B", "C", "B", "B", "C"]));
