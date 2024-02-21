var testStrs = ["dog", "racecar", "car"];
function longestCommonPrefix(strs) {
    var sortedStrs = strs.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    });
    console.log('sortedStrs', sortedStrs);
    var commonPrefix = '';
    for (var i = 0; i < sortedStrs[0].length; i++) {
        if (sortedStrs[0][i] === sortedStrs[sortedStrs.length - 1][i]) {
            console.log('match', sortedStrs[0][i]);
            commonPrefix += sortedStrs[0][i];
        }
    }
    return commonPrefix;
}
;
console.log(longestCommonPrefix(testStrs));
