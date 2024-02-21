const testNums = [-1 ,0, 1, 2, -1, -4];

function threeSum(nums: number[]): number[][] {

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

    const sortedNums = nums.sort((a,b): number => {
        if (a < b) return -1;
        if (b > a) return 1;
        if (a === b) return 0;
    });

    const output: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        // skip duplicate if covered in last iteration
        if (sortedNums[i] === sortedNums[i-1] && i > 0) continue;

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
};

console.log('testNums', threeSum(testNums));
