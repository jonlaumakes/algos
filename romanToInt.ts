const testStr = 'III';
const testStr1 = "MCMXCIV";

function romanToInt1(s: string): number {
    let sum = 0;
    const dictionary = {
        I : 1,
        V:  5,
        X:  10,
        L:  50,
        C:  100,
        D:  500,
        M:  1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };

    for (let i = 0; i < s.length; i ++) {
        const letter = s[i];
        const nextLetter = s[i+1]
        if (dictionary[nextLetter] > dictionary[letter]) {
            sum -= dictionary[letter];
        } else {
            sum += dictionary[letter];
        }
    }
    return sum;
};



function romanToInt(s: string): number {
    // Input: s = "MCMXCIV"
    // Output: 1994
    // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
    const dictionary = {
        I : 1,
        V:  5,
        X:  10,
        L:  50,
        C:  100,
        D:  500,
        M:  1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };

    let sum = 0;
    let i = 0;

    const addOne = (s: string): void => {
        if (s[i]) {
            sum += dictionary[s[i]];
        };
    };

    //iterate through letters
    while (i < s.length) {
        // special prefix I,X,C
        if (
            s[i] === 'I'||
            s[i] === 'X' ||
            s[i] === 'C'
        ) {
            // if prefix is in dict
                // T: add 2 char translation to sum
                // F: add 1 char translation to sum
            const prefix = s[i] + s[i + 1];
            if (dictionary[prefix]) {
                sum += dictionary[prefix];
                i += 2;
            } else {
                sum += dictionary[s[i]];
                i += 1;
            }
        } else {
            // ! special
            sum += dictionary[s[i]];
            i += 1;
        }
    }

    return sum;
};

console.log(romanToInt(testStr));