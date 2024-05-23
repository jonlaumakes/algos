// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

// Input: String="cbbebi", K=10
// Output: 6
// Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

// expand right
// while charCount in map > k
// shrink window until freq <=k

let findLongestSub = (str: string, k: number) => {
  let left = 0;
  let maxLength = 0;
  let charMap = {};

  for (let right = 0; right < str.length; right++) {
    const letter = str[right];
    // update char map
    if (!charMap[letter]) {
      charMap[letter] = 0;
    }
    charMap[letter] += 1;

    // remove letters until freq of curr letter !> k
    while (Object.keys(charMap).length > k) {
      const letterToRemove = str[left];
      // reduce count (will always be positive)
      charMap[letterToRemove] -= 1;
      if (charMap[letterToRemove] === 0) {
        delete charMap[letterToRemove];
      }
      left += 1;
    }
    maxLength = Math.max(right - left + 1, maxLength);
  }

  return maxLength;
};

console.log(findLongestSub("araaci", 1));
console.log(findLongestSub("cbbebi", 3));
console.log(findLongestSub("cbbebi", 10));
