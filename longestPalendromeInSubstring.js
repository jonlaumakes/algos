var testStr = 'abcdcbae';
var longestPalindrome = function (s) {
    var expandAroundCenter = function (leftIdx, rightIdx) {
        // console.log(`index ${leftIdx},${rightIdx}`);
        while (leftIdx >= 0 && rightIdx < s.length && s[leftIdx] === s[rightIdx]) {
            leftIdx--;
            rightIdx++;
        }
        // console.log(`index ${leftIdx},${rightIdx}`);
        return s.substring(leftIdx + 1, rightIdx);
    };
    var longestPal = '';
    for (var i = 0; i < s.length - 1; i++) {
        var oddLengthPal = expandAroundCenter(i, i);
        var evenLengthPal = expandAroundCenter(i, i + 1);
        console.log('oddLengthPal', oddLengthPal);
        console.log('evenLengthPal', evenLengthPal);
        if (oddLengthPal.length > longestPal)
            longestPal.length = oddLengthPal;
        if (evenLengthPal.length > longestPal)
            longestPal.length = evenLengthPal;
    }
    return longestPal;
};
console.log('result', longestPalindrome(testStr));
