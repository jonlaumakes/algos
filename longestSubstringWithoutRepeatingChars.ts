function lengthOfLongestSubstring(s: string): number {
    // In -> "abcadefaka"
    // Out -> 'bcadef'
    let longestStr: string = '';
    let aggregator: string = '';

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        // if a letter is found again
        if (aggregator.indexOf(letter) !== -1) {
            console.log('repeat', letter);
            // update the longest Str if aggregator > longestStr
            if (aggregator.length > longestStr.length) {
                longestStr = aggregator;
            }
            // move window start to current index
            // set aggregator to current letter
            aggregator = letter;
            console.log('new aggregator set', aggregator);
        }
        // if a letter is found for the first time
        if (aggregator.indexOf(letter) == -1) {
            aggregator += letter;
            console.log('new agg', aggregator);
        }
    }

    return longestStr.length;
};

let testStr = 'abcabcbb';
console.log(lengthOfLongestSubstring(testStr));