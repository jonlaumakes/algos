const longestPalindrome = (s: string): string => {
  let longestPalindromicSubstring: string = "";
  // iterate though each letter
  // from the current letter left and right from letter
  // if left === right letters -> continue until they do not match
  // check the current palindrome against the current output & update if needed

  for (let i = 0; i < s.length; i++) {
    // const letter = s[i];
    let startPos = i + 1;
    let endPos = i - 1;

    while (startPos >= 0 && s[startPos] === s[endPos]) {
      startPos -= 1;
      endPos += 1;
    }

    if (endPos - startPos > longestPalindromicSubstring.length) {
      const palindrome = s.slice(startPos + 1, endPos);
      console.log("current longest palindrome", palindrome);
      longestPalindromicSubstring = s.slice(startPos + 1, endPos);
    }
  }

  return longestPalindromicSubstring;
};

const testStr1 = "aballullcde";
console.log(longestPalindrome(testStr1));
console.log(testStr1.slice(0, 2));
