type subset = number[];
const subsets = (numbers: subset): subset[] => {
    const subsets = [];
    // 1,3,5

    subsets.push([]);
    // iterate through numbers
    for (let i = 0; i < numbers.length; i++) {
        // iterate through each subset and add the number
            // 1 -> 3 -> 5
        let k = subsets.length;
        for (let j = 0; j < k; j++) { // 1 -> 2 -> 3
            let subSetCopy = subsets[j].slice(0); // [] -> [] -> [1] -> []
            subSetCopy.push(numbers[i]);
            subsets.push(subSetCopy); // [1] -> [5] -> [1,5] -> [5] -> [5,3] -> [1,5,3]
        }
    }

    return subsets;
}

console.log(subsets([1,5,3]));
