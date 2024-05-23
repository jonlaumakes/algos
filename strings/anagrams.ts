const isAnagramUseSort = (s1: string, s2: string): boolean => {
  if (s2.length !== s1.length) return false;

  return s1.split("").sort().join("") === s2.split("").sort().join("");
};

// console.log(isAnagramUseSort("apple", "papel"));
// console.log(isAnagramUseSort("apple", "pavpl"));

const isAnagramUseMap = (s1: string, s2: string): boolean => {
  // check for unequal lengths
  if (s1.length !== s2.length) return false;

  // create a map of s1 char freq
  const map = {};
  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    if (!(letter in map)) {
      map[letter] = 0;
    }
    map[letter] += 1;
  }

  // iterate through the letters in s2
  for (let j = 0; j < s2.length; j++) {
    const letter = s2[j];
    // letter not in map -> false
    if (!(letter in map)) return false;
    map[letter] -= 1;
    // freq of letter in s2 higher than s1 -> false
    if (map[letter] < 0) return false;
  }

  return true;
};

// console.log(isAnagramUseMap("apple", "papel"));
// console.log(isAnagramUseMap("apple", "pavpl"));
// console.log(isAnagramUseMap("applea", "papel"));

const findAnagramGroups = (words: string[]): string[][] => {
  const output = [];
  // create map of key -> word val-> [anagrams]
  const map = {};
  // iterate through words
  for (let word of words) {
    // iterate through keys(words) in map
    let wordInMap = false;
    for (let anagramGroup in map) {
      if (isAnagramUseMap(anagramGroup, word)) {
        map[anagramGroup].push(word);
        wordInMap = true;
      }
    }
    // add word as own anagram group to map
    if (!wordInMap) map[word] = [word];
  }
  for (let group in map) {
    output.push(map[group]);
  }

  return output;
};
console.log(findAnagramGroups(["apple", "bored", "robed", "papel", "zeebra"]));
