var subsets = function (numbers) {
    var subsets = [];
    // 1,3,5
    subsets.push([]);
    // iterate through numbers
    for (var i = 0; i < numbers.length; i++) {
        // iterate through each subset and add the number
        // 1 -> 3 -> 5
        var k = subsets.length;
        for (var j = 0; j < k; j++) { // 1 -> 2 -> 3
            var subSetCopy = subsets[j].slice(0); // [] -> [] -> [1] -> []
            subSetCopy.push(numbers[i]);
            subsets.push(subSetCopy); // [1] -> [5] -> [1,5] -> [5] -> [5,3] -> [1,5,3]
            // console.log('subsets', subsets);
        }
    }
    return subsets;
};
console.log(subsets([1, 5, 3]));
