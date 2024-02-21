const testStrs = ["dog","racecar","car"];

// sort the list of strings
// if all strings have common prefixes, the first and last string should have SOME common prefixes
  // (if not -> there are no common prefixes between all strings)
// iterate through the first string (shortest)
 // if the letter matches in the longest string -> add to aggregator
 // else break and return commonPrefix

function longestCommonPrefix(strs: string[]): string {
    const sortedStrs = strs.sort((a,b) => {
        if (a < b) {
            return -1;
        } else if(a > b) {
            return 1;
        }
        return 0;
    });

    console.log('sortedStrs', sortedStrs);
    let commonPrefix = '';
    for (let i = 0; i < sortedStrs[0].length; i ++) {
        if (sortedStrs[0][i] === sortedStrs[sortedStrs.length -1][i]) {
            commonPrefix += sortedStrs[0][i];
        } else break;
    }
    return commonPrefix;
};

console.log(longestCommonPrefix(testStrs));