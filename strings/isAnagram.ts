const is_anagram_use_sort = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;
  return (
    str1.trim().split("").sort().join() === str2.trim().split("").sort().join()
  );
};

const is_anagram_use_map = (s1: string, s2: string) => {
  // check equal lengths
  if (s1.length !== s2.length) return false;
  const s1CharMap = new Map<string, number>();

  // build char freq map from s1
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (!s1CharMap.has(char)) {
      console.log("not in map", char);
      s1CharMap.set(char, 0);
    }
    s1CharMap.set(char, s1CharMap.get(char) + 1);
    console.log("freq char", s1CharMap);
  }

  // iterate through s2 and find char in map
  for (let j = 0; j < s2.length; j++) {
    // not in map -> not anagram
    const s2Char = s2[j];
    if (!s1CharMap.has(s2Char)) {
      return false;
    }
    // in map -> reduce count
    s1CharMap.set(s2Char, s1CharMap.get(s2Char) - 1);
    // if freq < 0 -> redudant chars in s2 -> not anagram
    if (s1CharMap.get(s2Char) < 0) return false;
  }
  return true;
};

const is_anagram_use_map_obj = (s1: string, s2: string) => {
  // if unequal len -> false
  if (s1.length !== s2.length) return false;

  // create char freq map from s1
  type FreqMap = { [key: string]: number };
  let s1freqMap = {};
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (!(char in s1freqMap)) {
      s1freqMap[char] = 0;
    }
    s1freqMap[char] += 1;
  }

  let foundCount = 0;
  for (let j = 0; j < s2.length; j++) {
    const char = s2[j];
    // the char is not in the freq map or we already found all of needed instance of letter (there are extras in s2)
    if (!(char in s1freqMap) || s1freqMap[char] === 0) {
      return false;
    }
    s1freqMap[char] -= 1;
  }
  return true;
};

const word1 = " rob1ed";
const word2 = "bor ed1";
const word3 = "apple";
const word4 = "bo red";
const word5 = "papel";

// console.log(is_anagram_use_sort(" rob1ed", "bor ed1"));
// console.log(is_anagram_use_sort("apple", "rob1ed"));
// console.log(is_anagram_use_sort("apple", "plpea"));
// console.log(is_anagram_use_sort(word4, word1));

// console.log(is_anagram_use_map(word1, word2));
// console.log(is_anagram_use_map(word2, word3));
// console.log(is_anagram_use_map(word2, word4));
// console.log(is_anagram_use_map(word3, word5));

// console.log(is_anagram_use_map_obj(" rob1ed", "bor ed1"));
// console.log(is_anagram_use_map_obj("bor ed1", "apple"));
// console.log(is_anagram_use_map_obj("bor ed1", "bo red"));

const groupAnagrams = (strs: string[]): string[][] => {
  const output: string[][] = [];
  const sortedStrMap: Map<string, string[]> = new Map();

  // build the frequency map: key is sortedStr
  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (sortedStrMap[sortedStr]) {
      // console.log("update", sortedStrMap[sortedStr]);
      sortedStrMap[sortedStr].push(str);
      // console.log("updated", sortedStrMap[sortedStr]);
    } else {
      sortedStrMap[sortedStr] = [str];
      // console.log("created", sortedStrMap[sortedStr]);
    }
  }

  // console.log("map", sortedStrMap);

  for (let sortedStr in sortedStrMap) {
    const anagrams: string[] = sortedStrMap[sortedStr];
    output.push(anagrams);
  }

  return output;
};

const groupAnagramsUseObj = (words: string[]): string[][] => {
  const output = [];
  const anagramMap = {};
  // iterate through the words
  for (const word of words) {
    // iterate through the keys in map
    let isWordInAnagramMap = false;
    for (const anagram in anagramMap) {
      if (is_anagram_use_map(word, anagram)) {
        // if word is anagram of key -> map[key].push(word)
        anagramMap[anagram].push(word);
        isWordInAnagramMap = true;
      }
    }
    // word !in map -> add to map map[word] = [word]
    if (!isWordInAnagramMap) {
      anagramMap[word] = [word];
    }
  }
  for (let anagram in anagramMap) {
    output.push(anagramMap[anagram]);
  }
  return output;
};

console.log(
  groupAnagramsUseObj(["bored", "robbed", "robed", "apple", "debbor", "ppale"])
);
