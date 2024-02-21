var subSetsWithDuplicates = function (numbers) {
    var subSets = [];
    subSets.push([]);
    // iterate through nums
    // iterate through subsets
    // if it is a !duplicate ->  add the current number
    // if it is a duplicate ->  add the current number to ONLY the last subsets we created in the last setep
    var startIndex = 0;
    var endIndex = 0;
    for (var i = 0; i < numbers.length; i++) {
        startIndex = 0; // re-init the start index
        if (i > 0 && numbers[i] === numbers[i - 1]) {
            startIndex = endIndex + 1;
        }
        endIndex = subSets.length - 1;
        var currentNumber = numbers[i];
        console.log(currentNumber, startIndex, endIndex);
        for (var k = startIndex; k < endIndex + 1; k++) {
            // !duplicate
            var subSetCopy = subSets[k].slice(0);
            subSetCopy.push(currentNumber);
            subSets.push(subSetCopy);
        }
    }
    return subSets;
};
console.log(subSetsWithDuplicates([1, 3, 3]));
