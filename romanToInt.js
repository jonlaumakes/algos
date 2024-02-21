var testStr = 'III';
var testStr1 = "MCMXCIV";
function romanToInt(s) {
    // Input: s = "MCMXCIV"
    // Output: 1994
    // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
    var dictionary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };
    var sum = 0;
    var i = 0;
    var addOne = function (s) {
        if (s[i]) {
            sum += dictionary[s[i]];
        }
        ;
    };
    //iterate through letters
    while (i < s.length) {
        // special prefix I,X,C
        if (s[i] === 'I' ||
            s[i] === 'X' ||
            s[i] === 'C') {
            // if prefix is in dict
            // T: add 2 char translation to sum
            // F: add 1 char translation to sum
            var prefix = s[i] + s[i + 1];
            if (dictionary[prefix]) {
                sum += dictionary[prefix];
                i += 2;
            }
            else {
                sum += dictionary[s[i]];
                i += 1;
            }
        }
        else {
            // ! special
            sum += dictionary[s[i]];
            i += 1;
        }
    }
    return sum;
}
;
console.log(romanToInt(testStr));
