// abba
// abcba
var isPalindrome = function (word) {
  var start = 0;
  var end = word.length - 1;
  while (start <= end) {
    console.log(word[start], word[end]);
    if (word[start] !== word[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};
var findPalindromePairs = function (words) {
  var output = [];
  // iterate over words i
  for (var i = 0; i < words.length; i++) {
    var leftWord = words[i];
    // iterate over words j and skip word @ i
    for (var j = 0; j < words.length; j++) {
      if (i === j) {
        continue;
      }
      // join words and test if palindrome
      var rightWord = words[j];
      var joinedWord = leftWord + rightWord;
      var joinedIsPalindrome = isPalindrome(leftWord + rightWord);
      console.log("joined", joinedWord, joinedIsPalindrome);
      if (joinedIsPalindrome) output.push([i, j]);
    }
  }
  return output;
};
// console.log(isPalindrome("tabbat"));
console.log(findPalindromePairs(["tab", "bat", "cat"]));
//  [
//    [0,1],
//    [1,0],
//  ]
// tabbat
// battab
