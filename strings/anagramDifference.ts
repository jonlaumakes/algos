const anagramDifference = (s1: string, s2: string): number => {
  let output = 0;
  const s1Map = {};
  const s2Map = {};

  // create char freq map of s1
  for (let i = 0; i < s1.length; i++) {
    // console.log(s1[i]);
    const letter = s1[i];
    if (!(letter in s1Map)) {
      s1Map[letter] = 0;
    }
    s1Map[letter] += 1;
  }
  // create char freq map of s2
  for (let j = 0; j < s2.length; j++) {
    const letter = s2[j];
    if (!(letter in s2Map)) {
      s2Map[letter] = 0;
    }
    s2Map[letter] += 1;
  }
  console.log(s1Map, s2Map);
  const longerStringMap = s1.length >= s2.length ? s1Map : s2Map;
  // iterate over s1Map, s2Map and compare freq
  for (let letter in longerStringMap) {
    const s1Freq = s1Map[letter];
    const s2Freq = s2Map[letter] || 0;
    const replacements = Math.abs(s1Map[letter] - (s2Map[letter] || 0));
    output += replacements;
  }
  // add differences to the output
  return output;
};

console.log(anagramDifference("xyzabc", "abxyzc")); // 0
console.log(anagramDifference("abc", "xyz")); // 3
console.log(anagramDifference("abc", "acz")); // 1

console.log(anagramDifference("xyzabc", "bxzc")); // 2
