// In -> "axyzeatapoiumnq"
// Out -> 'poiumnq'

let findLongestWithoutRepeating = (str: string): string => {
  let output = "";
  const map = {};
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    const letter = str[right];
    // update the frequency map
    if (!map[letter]) {
      map[letter] = 0;
    }
    map[letter] += 1;
    // if freq of char > 1 -> shrink window
    while (map[letter] > 1) {
      const removedLetter = str[left];
      console.log("removed letter", removedLetter);
      map[removedLetter] = map[removedLetter] - 1;
      left += 1;
    }
    // update the output if new window > output
    if (right - left + 1 > output.length) {
      output = str.slice(left, right + 1);
      console.log("updated output", output);
    }
  }

  return output;
};

console.log(findLongestWithoutRepeating("axyzeatapoiumnq")); //tapoiumnq
