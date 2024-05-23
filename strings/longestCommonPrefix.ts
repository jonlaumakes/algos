const findLongestCommonPrefixUseSort = (words: string[]): string => {
  let output = "";

  // sort words
  const sortedWords = words.sort();
  // iterate through the letters of the first and last word in the list
  for (let i = 0; i < words[0].length; i++) {
    if (sortedWords[0][i] === sortedWords[sortedWords.length - 1][i]) {
      // add to output
      output += sortedWords[0][i];
    }
    // return output when letters don't match
    else return output;
  }
  return output;
};

const findLongestCommonPrefixUseIterate = (words: string[]): string => {
  let output = "";

  // iterate letters in first string (or any)
  for (let i = 0; i < words[0].length; i++) {
    const letter = words[0][i];
    console.log("letter", letter);
    // iterate through other words
    for (let j = 1; j < words.length; j++) {
      // if letters !match -> return output
      if (letter !== words[j][i]) return output;
    }
    // all words have letter at pos -> add letter to output
    output += letter;
  }

  return output;
};

console.log(
  findLongestCommonPrefixUseSort([
    "aacdexyzabc",
    "aacde1234",
    "aacde",
    "aacdefab",
  ])
);

console.log(
  findLongestCommonPrefixUseIterate([
    "aacdexyzabc",
    "aacde1234",
    "aacde",
    "aacdefab",
  ])
);
