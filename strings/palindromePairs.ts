// abba
// abcba
const isPalindrome = (word: string) => {
  let start = 0;
  let end = word.length - 1;

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

const findPalindromePairs = (words: string[]): number[][] => {
  const output = [];
  for (let i = 0; i < words.length; i++) {
    const leftWord = words[i];
    for (let j = 0; j < words.length; j++) {
      if (i === j) {
        continue;
      }
      const rightWord = words[j];
      const joinedWord = leftWord + rightWord;
      const joinedIsPalindrome = isPalindrome(leftWord + rightWord);
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
