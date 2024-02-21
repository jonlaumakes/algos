// 4 -> IV
// 54 -> LIV
// 42 -> XLII
// 2024 -> MMXXIV

const intToRoman = (number: number): string => {
    let output = '';
    type RnDef = [number, string];

    const dictionary: RnDef[] = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    // romanNums are built left to right
    // reduce the num by the largest possible roman numeral equiv
    // add the RM equiv to the string

    // 2024 - 1000 = 1024
    // 1024 - 1000 = 24
    // 24 - 10 = 14
    // 14 - 10 = 4
    // 4 - 4 = 0

    let inputNum = number;
    // while our number > 0
    while (inputNum > 0) {
        // iterate through dictionary
        for (let i = 0; i < dictionary.length; i++) {
            const dictionaryNum = dictionary[i][0];
            const dictionaryRM = dictionary[i][1];

            // if num > dictionary def
            if (inputNum >= dictionaryNum) {
            // add to output str
            // subtract dictionary number from inputNum
                output += dictionaryRM;
                inputNum -= dictionaryNum;
                break;
            }
        }
    }
    return output;
};

console.log(intToRoman(2004));
console.log(intToRoman(42));
console.log(intToRoman(4));
console.log(intToRoman(3));