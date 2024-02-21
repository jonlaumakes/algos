// 4, 6, 10

const binary_search = (numbers: number[], k: number): number => {
    let start = 0;
    let end = numbers.length -1;

    const isAscending = numbers[0] < numbers[numbers.length -1];

    // while true
        // find the center
        // if the center === k -> return i
        // if center < k
            // left = center
            // right remains
            // center is between new left and right

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let currentNumber = numbers[mid];
        if (currentNumber === k) return mid;

        if (isAscending) {
            if (currentNumber < k) start = mid +1;
            if (currentNumber > k) end = mid -1;
        } else {
            if (currentNumber < k) end = mid -1;
            if (currentNumber > k) start = mid +1;
        }
    }

    return -1;
}

console.log(binary_search([4, 6, 10], 10)) // 2
console.log(binary_search([1, 2, 3, 4, 7, 8, 9], 5)) // -1
console.log(binary_search([10, 6, 4], 10)) // 0
console.log(binary_search([10, 6, 4], 4)) // 2