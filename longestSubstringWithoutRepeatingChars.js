function lengthOfLongestSubstring(s) {
    // In -> "abcadefaka"
    // Out -> 'bcadef'
    var longestStr = '';
    //   let startIdx: number = 0;
    //   let endIdx: number = 0;
    var aggregator = '';
    for (var i = 0; i < s.length; i++) {
        var letter = s[i];
        // if repeat
        if (aggregator.indexOf(letter) !== -1) {
            console.log('repeat', letter);
            // update the longest Str if aggregator > longestStr
            if (aggregator.length > longestStr.length) {
                longestStr = aggregator;
            }
            // move window start to current index
            //   startIdx = i;
            // set aggregator to current letter
            aggregator = letter;
            console.log('new aggregator set', aggregator);
        }
        if (aggregator.indexOf(letter) == -1) {
            aggregator += letter;
            console.log('new agg', aggregator);
        }
    }
    return longestStr.length;
}
;
var testStr = 'abcabcbb';
console.log(lengthOfLongestSubstring(testStr));
// console.log(
//     ''.indexOf('a')
// )
