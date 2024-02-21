// Input => nums [2,7,11, 15] target = 9
// map => {
//  2: 0,
//  7: 1,
// -2: 2
// -6: 3
// }
// Output => [0,1]
// Map
// {2: 0}
// {7: 1, }


console.log('hello');

function twoSum(numbers: number[], target: number): number[] {
    // iterate through nums
    // calc diff (target - number)
    // look for diff nums map
    // not in map -> store pair num: index
    // if in map -> return new array [map[diff], index]
    const numbersMap = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const diff = target - number;
        console.log('diff', diff);
        if (numbersMap.has(diff)) return [numbersMap.get(diff), i];
        numbersMap.set(number, i);
        console.log('numMap', numbersMap);
    }
};
const numbers = [2,7,11, 15];
const target = 9;

let res = twoSum(numbers, target);
console.log(res);