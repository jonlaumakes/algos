let testStr = 'abcdcbae';

const longestPalindrome = (s: string): string  => {
    const expandAroundCenter = (leftIdx, rightIdx): string => {
        // console.log(`index ${leftIdx},${rightIdx}`);
        while(leftIdx >= 0 && rightIdx < s.length && s[leftIdx] === s[rightIdx]) {
            leftIdx --;
            rightIdx ++;
        }
        // console.log(`index ${leftIdx},${rightIdx}`);
        return s.substring(leftIdx + 1, rightIdx);
    }

    let longestPal: string = '';

    for (let i = 0; i < s.length -1; i ++) {
        let oddLengthPal = expandAroundCenter(i,i);
        let evenLengthPal = expandAroundCenter(i, i+1);
        console.log('oddLengthPal', oddLengthPal);
        console.log('evenLengthPal', evenLengthPal);

        if (oddLengthPal.length > longestPal.length) longestPal = oddLengthPal;
        if (evenLengthPal.length > longestPal.length) longestPal = evenLengthPal;
    }

    return longestPal;
};

console.log('result', longestPalindrome(testStr));