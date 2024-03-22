let testArr = ["a", "b", "c", "c", "b", "a", "a", "b"];
let k = 2;

const findReplacementIndexes = (letters: string[], k: number): number[][] => {
  let output = [];
  let start = 0;
  let end = 0;
  let maxRepeatingCharactersLen = 0;
  let maxLetterFreq = 0;
  let letterMap: Map<string, number> = new Map();

  while (end <= letters.length - 1 && start <= letters.length - 1) {
    // if k >= (winLen - highestRepeating) -> valid window of all repeating letters
    const winLen = end - start + 1;

    const validWindow: boolean = k >= winLen - maxLetterFreq;

    if (validWindow) {
      console.log("valid window", start, end, letters.slice(start, end + 1));
      // overwrite output if a new max len is found
      if (winLen > maxRepeatingCharactersLen) {
        console.log("overwrite", winLen);
        maxRepeatingCharactersLen = winLen;
        output = [[start, end]];
        // add to output if maxLen = windowLen
      } else if (winLen === maxRepeatingCharactersLen) {
        console.log("add to", winLen);
        output.push([start, end]);
      }

      // update the map
      end += 1;
      // update map
      const letter = letters[end];
      const letterCount = letterMap.get(letter);
      if (letterCount) {
        letterMap.set(letter, letterCount + 1);
      } else {
        letterMap.set(letter, 1);
      }

      if (letterMap.get(letter) > maxLetterFreq) {
        maxLetterFreq = letterMap.get(letter);
      }
    } else {
      console.log("invalid window", start, end, letters.slice(start, end + 1));
      const letterRemove = letters[start];
      const letterCount = letterMap.get(letterRemove);
      letterMap.set(letterRemove, letterCount - 1);
      start += 1;
    }
  }

  return output;
};

console.log(findReplacementIndexes(testArr, k));
