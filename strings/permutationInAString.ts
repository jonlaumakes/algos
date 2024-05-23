const testStr = "zyabeibcaii";
const pattern = "abc";

// keep a charactersFoundCounter in window = patternLen
// iterate and maintain a sliding window
// increment the endPos +=1
// if the new letter is the in patternFreqMap
// reduce the count in freq map
// if the count is now 0 -> update charactersFoundCounter (unique char)
// if the count === keys in freqMap (distinct letters) -> return true
// if we the window is now greater than the patternLen
// startPos += 1
// if the character is in the map -> (put it back) freq +=1

const findPermutation = (s: string, p: string): boolean => {
  // create a char frequency map for the pattern
  const patternCharFreqMap: Map<string, number> = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!patternCharFreqMap.get(pattern[i])) {
      patternCharFreqMap.set(pattern[i], 0);
    }
    patternCharFreqMap.set(pattern[i], patternCharFreqMap.get(pattern[i]) + 1);
  }
  const uniqueLettersFound = patternCharFreqMap.size;

  console.log("patternFreqMap", patternCharFreqMap);
  let consecutiveCharFound = 0;

  let start = 0;

  for (let i = 0; i < s.length; i++) {
    // remove leftmost letter if windowLen > patternLen
    if (i - start + 1 > pattern.length) {
      const startLetter = s[start];

      if (patternCharFreqMap.get(startLetter) >= 0) {
        consecutiveCharFound -= 1;

        patternCharFreqMap.set(
          startLetter,
          patternCharFreqMap.get(startLetter) + 1
        );
      }

      start += 1;
    }

    // add right most letter
    const addLetter = s[i];

    if (patternCharFreqMap.get(addLetter)) {
      patternCharFreqMap.set(addLetter, patternCharFreqMap.get(addLetter) - 1);
    }

    if (patternCharFreqMap.get(addLetter) === 0) consecutiveCharFound += 1;
    console.log(
      `${s.slice(start, i + 1)}, ${consecutiveCharFound}`,
      patternCharFreqMap,
      consecutiveCharFound
    );

    if (consecutiveCharFound === uniqueLettersFound) return true;
  }
  return false;
};

console.log(findPermutation(testStr, pattern));
