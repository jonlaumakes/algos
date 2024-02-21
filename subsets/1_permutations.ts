// ===================== ITERATIVE APPROACH =====================
// const findPermutations = (numbers: number[]): number[][] => {
//     const output = [];
//     const permutations: number[][] = [];
//     permutations.push([]);
//
//     // iterate through the numbers
//         // store the permutations length
//         // iterate through the permutations
//             // remove & store permutaion from permutations && copy
//             // store the permutation length
//                 // iterate through the positions to slot in curerntNum -> 0 - lastPos (permutation length)
//                     // create a new permutation copied from the old permutation
//                     // splice in the current number
//                     // if the permutation length === numbers length -> add to output
//                     // if the permutation len < numbers length -> store to permutation
//
//     for (let i = 0; i < numbers.length; i++) {
//         const currentNumber = numbers[i];
//         const permutationsLength = permutations.length;
//
//         for (let j = 0; j < permutations.length; j++) {
//             const removedPermutation = permutations.shift();
//             const currentPermutationLength = removedPermutation.length;
//
//             for (let k = 0; k <= currentPermutationLength; k++) {
//                 const newPermutation = removedPermutation.slice(0);
//                 newPermutation.splice(k, 0, currentNumber);
//
//                 if (newPermutation.length === numbers.length) {
//                     output.push(newPermutation);
//                 } else if (newPermutation.length < numbers.length) {
//                     permutations.push(newPermutation);
//                 }
//             }
//         }
//     }
//     return output;
// }

const findPermutationsIterative = (numbers: number[]): number[][] => {
    const output = [];
    const permutations: number[][] = [];
    permutations.push([]);

    // iterate numbers -> 1 -> 3
        // store perms length -> iterate permutations -> [] -> [1]
        // remove permutation from perms and create a copy -> [] -> [1]
            // itereate through available positions in the perm copy to add current number => 0
                // if the new permutation < target length -> add to permutations
                    // else === target length push to output

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        console.log(`current number ${currentNumber}`)
        const permutationsLength = permutations.length;

        for (let j = 0; j < permutationsLength; j++) {
            const permutationCopy = permutations.shift();
            console.log('permutation copy', permutationCopy);

            for (let k = 0; k <= permutationCopy.length; k++) {
                console.log('new permutation insert at', k);
                const newPermutation = permutationCopy.slice(0);
                newPermutation.splice(k, 0, currentNumber);
                console.log('new permutation created', newPermutation);

                if (newPermutation.length === numbers.length) {
                    output.push(newPermutation);
                } else if (newPermutation.length < numbers.length) {
                    permutations.push(newPermutation);
                }
            }
        }
    }

    return output;
};

// Depth first pattern
const findPermutationsRecursive = (numbers: number[]): number[][] => {
    const output = [];
    // for any permutation -> numbers, index, output aggregator, current permutation
    const generatePermutations = (numbers: number[], index: number, permutation: number[], output: number[][]): void => {
        console.log('generate perm', permutation);
        if (index === numbers.length) {
            output.push(permutation);
        } else {
            // iterate through the available position to insert the number
            for (let i = 0; i <= permutation.length; i++) { // initial permutation -> []
                console.log(`index: ${index}, number: ${numbers[index]}, permutation ${permutation}`);
                // copy permutation and create new permutation with insertion at i
                const newPermutation = permutation.slice(0);
                newPermutation.splice(i, 0, numbers[index]);
                // get permutations from new permutation & advance the index
                generatePermutations(numbers, index + 1, newPermutation, output);
            }
        }
    }

    generatePermutations(numbers, 0, [], output);
    return output;
}

console.log(findPermutationsIterative([1,3,5]));
// console.log(findPermutationsRecursive([1,3,5]));