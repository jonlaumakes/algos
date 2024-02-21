// PAYPALISHIRING
// PAHNAPLSIIGYIR
var testStr = 'PAYPALISHIRING';
var testRows = 3;
var convert = function (string, numRows) {
    // initialize array of strings
    // each string will represent a row
    var letterRows = [];
    for (var i = 0; i < numRows; i++) {
        letterRows[i] = '';
    }
    console.log('letterRows', letterRows);
    var currRow = 0;
    var isAsc = true;
    // 0 -> 1 -> 2 -> 1 -> 0
    // iterate letters in str
    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        // place letter in 'row'
        letterRows[currRow] = letterRows[currRow] += letter;
        // increment currRow
        // if asc & below num rows max
        if (currRow === numRows - 1) {
            isAsc = false;
        }
        if (currRow === 0) {
            isAsc = true;
        }
        // move rows depending on isAsc
        currRow = isAsc ? currRow + 1 : currRow - 1;
        console.log('currRow', currRow);
    }
    return letterRows.join('');
};
console.log(convert(testStr, testRows));
