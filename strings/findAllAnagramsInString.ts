let testS = "cbaebabacd";
let testP = "abc";

// output = [0,6];
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

const findAnagrams = (s: string, pattern: string): number[] => {
  const output = [];
  let patternHash = 0;
  const c = 26;
  const mod = 11;

  // sliding window + hashing (rubin karp)
  // iterate through the string and move the sliding window of length p
  // p[0]*26^(p-1) + p[0]*26^(p-2)

  const createHash = (str: string, hashValue = 0): number => {
    for (let i = 0; i < str.length; i++) {
      const power = str.length - 1 - i;

      hashValue += (str.charCodeAt(i) * Math.pow(c, power)) % mod;
    }
    return hashValue;
  };

  // get the hash for the pattern
  patternHash = createHash(pattern);
  console.log("pattern hash", patternHash);

  let startPos = 0;
  let endPos = pattern.length - 1;
  let windowHash = createHash(s.slice(0, pattern.length));
  console.log("window hash", windowHash);

  while (endPos < s.length - 1) {
    console.log("iterate - windowPos", startPos, endPos);
    console.log("iterate - patternHash", patternHash);
    console.log("iterate - windowHash", windowHash);
    if (windowHash === patternHash) {
      output.push(startPos);
    }

    // the window and pattern are not equal
    // update the window has by removing the value of the first letter and adding the value of the last number
    const removedLetterValue = createHash(s[startPos]);

    const addedLetterValue = createHash(s[endPos + 1]);
    console.log(`removed ${removedLetterValue}, added ${addedLetterValue}`);
    windowHash =
      (((windowHash - removedLetterValue) * c) % mod) + addedLetterValue;
    console.log(`new windowHash ${windowHash}`);

    // iterate
    startPos += 1;
    endPos += 1;
  }

  return output;
};

let testStr = "abcdabcefg";
let pattern = "abc";

console.log(findAnagrams(testStr, pattern));
