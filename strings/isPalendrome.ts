// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const isPalindrome = (str: string) => {
    const strCleaned = str.split(" ")
        .join("")
        .toLowerCase();
    console.log(`cleaned: ${strCleaned}`);

    let i = 0;
    let j = strCleaned.length -1;

    while(i <= j) {
        if (strCleaned[i] !== strCleaned[j]) return false;
        i++;
        j--;
    }

    return true;
}

const testInput = "A man, a plan, a canal: Panama";
console.log(isPalindrome(testInput));