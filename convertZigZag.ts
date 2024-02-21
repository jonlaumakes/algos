// PAYPALISHIRING
// PAHNAPLSIIGYIR

const testStr = 'PAYPALISHIRING';
const testRows = 3;

const convert = (string: string, numRows: number): string => {
    // initialize array of strings
    // each string will represent a row
    const letterRows = [];
    for (let i = 0; i < numRows; i++) {
        letterRows[i] = '';
    }
    console.log('letterRows', letterRows);

    let currRow: number = 0;
    let isAsc: boolean = true;
    // 0 -> 1 -> 2 -> 1 -> 0

    // iterate letters in str
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        // place letter in 'row'
        letterRows[currRow] = letterRows[currRow] += letter;

        // increment currRow
        // if asc & below num rows max
        if (currRow === numRows -1) {
            isAsc = false;
        }
        if (currRow === 0) {
            isAsc = true;
        }
        // move rows depending on isAsc
        currRow = isAsc ? currRow+1 : currRow-1;
        console.log('currRow', currRow);
    }

    return letterRows.join('');
}

console.log(convert(testStr, testRows));