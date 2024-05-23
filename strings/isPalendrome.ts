// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const isWordPalindrome = (str: string): boolean => {
  // compare first and last letter
  // increment/decrement positions
  let startPos = 0;
  let endPos = str.length - 1;

  while (startPos <= endPos) {
    if (str[startPos] !== str[endPos]) return false;
    startPos++;
    endPos--;
  }
  return true;
};

console.log(isWordPalindrome("aabbcddcbbaa"));
console.log(isWordPalindrome("amanaplanacanalpanama"));
console.log(isWordPalindrome("A man, a plan, a canal: Panama"));

const getPalindromePairs = (words: string[]): number[][] => {
  const output = [];

  // iterate through the words i
  for (let i = 0; i < words.length; i++) {
    // iterate through the words j... skip if i === j
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue;
      // combine word 1 and 2 and test
      const concatWords = words[i].concat(words[j]);
      // pal -> push position to outpu
      if (isWordPalindrome(concatWords)) {
        output.push([i, j]);
      }
    }
  }
  return output;
};
console.log(getPalindromePairs(["tab", "bat", "cat"]));
// tabbat -> 0, 1
// battab -> 1, 0
//  [ [0,1], [1,0] ]
