const is_anagram_use_sort = (s1: string, s2: string) => {
  const formatString = (str: string): string => {
    return str.split("").sort().join("");
  };

  return formatString(s1) === formatString(s2);
};

const is_anagram_use_map = (s1: string, s2: string) => {
  // check equal lengths
  if (s1.length !== s2.length) return false;

  const s1CharMap = new Map<string, number>();

  // create a map of s1 characters
  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    const letterFrequency = s1CharMap.get(letter);
    // letter in map
    if (letterFrequency) {
      s1CharMap.set(letter, letterFrequency + 1);
      console.log("added");
    } else {
      console.log("created");
      s1CharMap.set(letter, 1);
    }
  }

  console.log(`s1 map, ${s1CharMap}`);
  console.log(Object.fromEntries([...s1CharMap]));

  // check each letter in s2 against the map
  for (let i = 0; i < s2.length; i++) {
    const letter = s2[i];
    const letterFrequency = s1CharMap.get(letter);
    // map does not contain letter
    if (!letterFrequency) {
      console.log(`letter not found ${letter}, ${letterFrequency}`);
      return false;
    }
    if (letterFrequency === 1) {
      s1CharMap.delete(letter);
    }
    if (letterFrequency > 1) {
      s1CharMap.set(letter, letterFrequency - 1);
    }
  }

  return true;
};

const is_anagram_use_map_obj = (s1: string, s2: string) => {
  if (s1.length !== s2.length) return false;

  type CharMap = { [key: string]: number };
  const s1CharMap: CharMap = {};

  // create a map of letter frequencies of first word
  for (let i = 0; i <= s1.length; i++) {
    const letter = s1[i];
    const frequency = s1CharMap[letter];

    frequency ? (s1CharMap[letter] = frequency + 1) : (s1CharMap[letter] = 1);
  }
  // iterate through second word and check if letter is in the map + update map
  for (let i = 0; i <= s2.length; i++) {
    const letter = s2[i];
    const frequency = s1CharMap[letter];

    // if letter not found or count === 0 -> not anagram
    if (!frequency || frequency === 0) return false;
    s1CharMap[letter] -= 1;
  }

  return true;
};

const word1 = " rob1ed";
const word2 = "bor ed1";
const word3 = "apple";
const word4 = "bo red";

// console.log(is_anagram_use_sort(word1, word2));
// console.log(is_anagram_use_sort(word3, word1));
// console.log(is_anagram_use_sort(word4, word1));
// console.log(is_anagram_use_map(word1, word2));
// console.log(is_anagram_use_map(word2, word3));
// console.log(is_anagram_use_map(word2, word4));

const groupAnagrams = (strs: string[]): string[][] => {
  const output: string[][] = [];
  const sortedStrMap: Map<string, string[]> = new Map();

  // build the frequency map: key is sortedStr
  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (sortedStrMap[sortedStr]) {
      console.log("update", sortedStrMap[sortedStr]);
      sortedStrMap[sortedStr].push(str);
      console.log("updated", sortedStrMap[sortedStr]);
    } else {
      sortedStrMap[sortedStr] = [str];
      console.log("created", sortedStrMap[sortedStr]);
    }
  }

  console.log("map", sortedStrMap);

  for (let sortedStr in sortedStrMap) {
    const anagrams: string[] = sortedStrMap[sortedStr];
    output.push(anagrams);
  }

  return output;
};

const anagrams = ["bored", "robed", "apple", "apple", "robbed", "debbor"];
console.log(groupAnagrams(anagrams));
