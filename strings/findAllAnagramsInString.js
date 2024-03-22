var testS = "cbaebabacd";
var testP = "abc";
// output = [0,6];
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
var findAnagrams = function (s, pattern) {
    var output = [];
    var patternHash = 0;
    var c = 26;
    var mod = 11;
    // sliding window + hashing (rubin karp)
    // iterate through the string and move the sliding window of length p
    // p[0]*26^(p-1) + p[0]*26^(p-2)
    var createHash = function (str, hashValue) {
        if (hashValue === void 0) { hashValue = 0; }
        for (var i = 0; i < str.length; i++) {
            var power = str.length - 1 - i;
            hashValue += (str.charCodeAt(i) * Math.pow(c, power)) % mod;
        }
        return hashValue;
    };
    // get the hash for the pattern
    patternHash = createHash(pattern);
    console.log("pattern hash", patternHash);
    var startPos = 0;
    var endPos = pattern.length - 1;
    var windowHash = createHash(s.slice(0, pattern.length));
    console.log("window hash", windowHash);
    while (endPos < s.length - 1) {
        console.log("iterate - windowPos", startPos, endPos);
        console.log("iterate - patternHash", patternHash);
        console.log("iterate - windowHash", windowHash);
        if (windowHash === patternHash) {
            output.push(startPos);
        }
        // the window and pattern are not equal
        // update the window has by removing the value of the first letter and adding the value of the last number
        var removedLetterValue = createHash(s[startPos]);
        var addedLetterValue = createHash(s[endPos + 1]);
        console.log("removed ".concat(removedLetterValue, ", added ").concat(addedLetterValue));
        windowHash =
            (((windowHash - removedLetterValue) * c) % mod) + addedLetterValue;
        console.log("new windowHash ".concat(windowHash));
        // iterate
        startPos += 1;
        endPos += 1;
    }
    return output;
};
var testStr = "abcdabcefg";
var pattern = "abc";
console.log(findAnagrams(testStr, pattern));
