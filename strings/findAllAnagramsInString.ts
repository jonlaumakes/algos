// const findAllAnagramsInStringUseHash = (
//   s: string,
//   pattern: string
// ): number[] => {
//   const output = [];
//   const c = 26;
//   const mod = 11;

//   // sliding window + hashing (rubin karp)
//   // iterate through the string and move the sliding window of length p
//   // p[0]*26^(p-1) + p[0]*26^(p-2)

//   const createHash = (str: string, hashValue = 0): number => {
//     for (let i = 0; i < str.length; i++) {
//       const power = str.length - 1 - i;

//       hashValue += (str.charCodeAt(i) * Math.pow(c, power)) % mod;
//     }
//     return hashValue;
//   };

//   // get the hash for the pattern
//   const patternHash = createHash(pattern);
//   console.log("patternHash", patternHash);

//   let startPos = 0;
//   let endPos = pattern.length - 1;
//   let windowHash = createHash(s.slice(0, pattern.length));

//   while (endPos < s.length - 1) {
//     console.log(
//       "iterate - windowPos",
//       startPos,
//       s.slice(startPos, endPos + 1),
//       windowHash
//     );
//     if (windowHash === patternHash) {
//       console.log("found", s, s.slice(startPos, endPos + 1));
//       output.push(startPos);
//     }

//     // the window and pattern are not equal
//     // update the window has by removing the value of the first letter and adding the value of the last number
//     const removedLetterValue = createHash(s[startPos]);

//     const addedLetterValue = createHash(s[endPos + 1]);
//     console.log("removedLetterValue", removedLetterValue);
//     console.log("addedLetterValue", addedLetterValue);

//     windowHash =
//       (((windowHash - removedLetterValue) * c) % mod) + addedLetterValue;

//     // iterate
//     startPos += 1;
//     endPos += 1;
//   }

//   return output;
// };

const findAllAnagramsUseMap = (s: string, p: string): number[] => {
  const output = [];
  let charFound = 0;
  let windowStart = 0;

  // create a pattern char freqMap
  type FreqMap = { [key: string]: number };
  const freqMap: FreqMap = {};
  for (let i = 0; i < p.length; i++) {
    const char = p[i];
    if (!(char in freqMap)) {
      freqMap[char] = 0;
    }
    freqMap[char] += 1;
  }

  // expand right
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    // reduce pattern freq
    if (rightChar in freqMap) {
      freqMap[rightChar] -= 1;
      // if non-extra char found in pattern -> update foundCount
      if (freqMap[rightChar] >= 0) {
        charFound += 1;
      }
    }

    // contract left if windowLen > pattern length
    const windowLength = windowEnd - windowStart + 1;
    if (windowLength > p.length) {
      const leftChar = s[windowStart];
      // update pattern freq
      if (leftChar in freqMap) {
        freqMap[leftChar] += 1;
        console.log("freqMap - removed", freqMap);
        // removed too many prev found -> reduce foundCount
        if (freqMap[leftChar] > 0) {
          charFound -= 1;
        }
      }
      windowStart += 1;
    }
    console.log("window", s.slice(windowStart, windowEnd + 1));
    // if charFound === patternLen -> add to output
    if (charFound === p.length) {
      console.log("found", s.slice(windowStart, windowEnd + 1));
      output.push(windowStart);
    }
  }

  return output;
};

// console.log(findAllExactPatternsInStringUseHash(testStr, pattern));
console.log(findAllAnagramsUseMap("abcebacbaacd", "abc"));
// output = [0,4,5, 6]
