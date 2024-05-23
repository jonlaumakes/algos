// Input: (String = "aabdeczba"), (Pattern = "abc");
// Output: "czba";

const findSmallestWindowContainingString = (
  str: string,
  pattern: string
): string => {
  const freqMap = {};
  let output = "";
  let matchedCount = 0;
  let windowStart = 0;
  let smallestWindowWithPattern = str.length;

  // create map: pattern character frequency
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in freqMap)) {
      freqMap[char] = 0;
    }
    freqMap[char] += 1;
  }

  console.log("freqMap", freqMap);
  // expand the window right
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // reduce the count of the rightChar in the freqMap if found
    if (rightChar in freqMap) {
      freqMap[rightChar] -= 1;
      // increase matchedCount if freqCount is >= 0.  Extra found characters are negative in freq
      if (freqMap[rightChar] >= 0) {
        matchedCount += 1;
      }
    }
    console.log("current Window", str.slice(windowStart, windowEnd + 1));
    // (while) if all the letters in the pattern within window -> contract left (windowStart +1)
    while (matchedCount === pattern.length) {
      const windowLength = windowEnd - windowStart + 1;
      // store the substring if the window is smaller than smallestPreviousSubstring
      if (windowLength < smallestWindowWithPattern) {
        smallestWindowWithPattern = windowLength;
        output = str.slice(windowStart, windowEnd + 1);
        console.log("found new match", output);
      }
      // reduce window size
      const leftChar = str[windowStart];
      windowStart += 1;
      // update freq map
      if (leftChar in freqMap) {
        freqMap[leftChar] += 1;
        // if all instances of 'letter' not found -> reduce the matchedCount
        if (freqMap[leftChar] > 0) {
          matchedCount -= 1;
        }
      }
    }
  }

  return output;
};

const findSmallestWindContainingStr = (
  searchStr: string,
  pattern: string
): string => {
  let output = searchStr;
  // create a sliding window
  // create a freq map for the pattern
  const freqMap = {};
  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    if (!(letter in freqMap)) {
      freqMap[letter] = 0;
    }
    freqMap[letter] += 1;
  }

  console.log("freq map", freqMap);

  let startPos = 0;
  let lettersFoundCount = 0;

  for (let endPos = 0; endPos < searchStr.length; endPos++) {
    const letter = searchStr[endPos];
    // extend window right
    // decrement frequency if letter in map
    if (letter in freqMap) {
      freqMap[letter] -= 1;
      // if frequency >=0 increase the count of letters found
      if (freqMap[letter] >= 0) {
        lettersFoundCount += 1;
      }
    }
    console.log("current window", searchStr.slice(startPos, endPos + 1));
    // shrink window as many times as possible we found all letters in pattern
    while (lettersFoundCount === pattern.length) {
      // store result
      if (endPos - startPos + 1 < output.length) {
        console.log(
          "found a new result",
          searchStr.slice(startPos, endPos + 1)
        );
        output = searchStr.slice(startPos, endPos + 1);
      }

      const letterToRemove = searchStr[startPos];

      if (letterToRemove in freqMap) {
        freqMap[letterToRemove] += 1;
        // removed too many
        if (freqMap[letterToRemove] > 0) {
          lettersFoundCount -= 1;
        }
      }
      startPos += 1;
    }
  }

  return output;
};

const str = "aabdeczba";
const p = "abc";

// aabc
// abc
console.log(findSmallestWindContainingStr(str, p));
