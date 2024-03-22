var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var is_anagram_use_sort = function (s1, s2) {
    var formatString = function (str) {
        return str.split("").sort().join("");
    };
    return formatString(s1) === formatString(s2);
};
// const is_anagram_use_map = (s1: string, s2: string) => {
//   // check equal lengths
//   if (s1.length !== s2.length) return false;
//   const s1CharMap = new Map<string, number>();
//   // create a map of s1 characters
//   for (let i = 0; i < s1.length; i++) {
//     const letter = s1[i];
//     const letterFrequency = s1CharMap.get(letter);
//     // letter in map
//     if (letterFrequency) {
//       s1CharMap.set(letter, letterFrequency + 1);
//       console.log("added");
//     } else {
//       console.log("created");
//       s1CharMap.set(letter, 1);
//     }
//   }
//   console.log(`s1 map, ${s1CharMap}`);
//   console.log(Object.fromEntries([...s1CharMap]));
//   // check each letter in s2 against the map
//   for (let i = 0; i < s2.length; i++) {
//     const letter = s2[i];
//     const letterFrequency = s1CharMap.get(letter);
//     // map does not contain letter
//     if (!letterFrequency) {
//       console.log(`letter not found ${letter}, ${letterFrequency}`);
//       return false;
//     }
//     if (letterFrequency === 1) {
//       s1CharMap.delete(letter);
//     }
//     if (letterFrequency > 1) {
//       s1CharMap.set(letter, letterFrequency - 1);
//     }
//   }
//   return true;
// };
var is_anagram_use_map = function (s1, s2) {
    if (s1.length !== s2.length)
        return false;
    var s1CharMap = {};
    // create a map of letter frequencies of first word
    for (var i = 0; i <= s1.length; i++) {
        var letter = s1[i];
        var frequency = s1CharMap[letter];
        frequency ? (s1CharMap[letter] = frequency + 1) : (s1CharMap[letter] = 1);
    }
    // iterate through second word and check if letter is in the map + update map
    for (var i = 0; i <= s2.length; i++) {
        var letter = s2[i];
        var frequency = s1CharMap[letter];
        // if letter not found or count === 0 -> not anagram
        if (!frequency || frequency === 0)
            return false;
        s1CharMap[letter] -= 1;
    }
    return true;
};
var word1 = " rob1ed";
var word2 = "bor ed1";
var word3 = "apple";
var word4 = "bo red";
// console.log(is_anagram_use_sort(word1, word2));
// console.log(is_anagram_use_sort(word3, word1));
// console.log(is_anagram_use_sort(word4, word1));
// console.log(is_anagram_use_map(word1, word2));
// console.log(is_anagram_use_map(word2, word3));
// console.log(is_anagram_use_map(word2, word4));
var groupAnagrams = function (strs) {
    var e_1, _a;
    var output = [];
    var sortedStrMap = new Map();
    try {
        // build the frequency map: key is sortedStr
        for (var strs_1 = __values(strs), strs_1_1 = strs_1.next(); !strs_1_1.done; strs_1_1 = strs_1.next()) {
            var str = strs_1_1.value;
            var sortedStr = str.split("").sort().join("");
            if (sortedStrMap[sortedStr]) {
                console.log("update", sortedStrMap[sortedStr]);
                sortedStrMap[sortedStr].push(str);
                console.log("updated", sortedStrMap[sortedStr]);
            }
            else {
                sortedStrMap[sortedStr] = [str];
                console.log("created", sortedStrMap[sortedStr]);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (strs_1_1 && !strs_1_1.done && (_a = strs_1.return)) _a.call(strs_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    console.log("map", sortedStrMap);
    for (var sortedStr in sortedStrMap) {
        var anagrams_1 = sortedStrMap[sortedStr];
        output.push(anagrams_1);
    }
    return output;
};
var anagrams = ["bored", "robed", "apple", "apple", "robbed", "debbor"];
console.log(anagrams);
console.log(groupAnagrams(anagrams));
