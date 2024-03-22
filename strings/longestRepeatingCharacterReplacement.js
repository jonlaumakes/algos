var testArr = ["a", "b", "c", "c", "b", "a", "a", "b"];
var k = 2;
var findReplacementIndexes = function (letters, k) {
    var output = [];
    var start = 0;
    var end = 0;
    var maxRepeatingCharactersLen = 0;
    var maxLetterFreq = 0;
    var letterMap = new Map();
    while (end <= letters.length - 1 && start <= letters.length - 1) {
        // if k >= (winLen - highestRepeating) -> valid window of all repeating letters
        var winLen = end - start + 1;
        var validWindow = k >= winLen - maxLetterFreq;
        if (validWindow) {
            console.log("valid window", start, end, letters.slice(start, end + 1));
            // overwrite output if a new max len is found
            if (winLen > maxRepeatingCharactersLen) {
                console.log("overwrite", winLen);
                maxRepeatingCharactersLen = winLen;
                output = [[start, end]];
                // add to output if maxLen = windowLen
            }
            else if (winLen === maxRepeatingCharactersLen) {
                console.log("add to", winLen);
                output.push([start, end]);
            }
            // update the map
            end += 1;
            // update map
            var letter = letters[end];
            var letterCount = letterMap.get(letter);
            if (letterCount) {
                letterMap.set(letter, letterCount + 1);
            }
            else {
                letterMap.set(letter, 1);
            }
            if (letterMap.get(letter) > maxLetterFreq) {
                maxLetterFreq = letterMap.get(letter);
            }
        }
        else {
            console.log("invalid window", start, end, letters.slice(start, end + 1));
            var letterRemove = letters[start];
            var letterCount = letterMap.get(letterRemove);
            letterMap.set(letterRemove, letterCount - 1);
            start += 1;
        }
    }
    return output;
};
console.log(findReplacementIndexes(testArr, k));
