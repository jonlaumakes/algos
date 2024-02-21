// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
var isPalindrome = function (str) {
    var strCleaned = str.split(" ")
        .join("")
        .toLowerCase();
    console.log("cleaned: ".concat(strCleaned));
    var i = 0;
    var j = strCleaned.length - 1;
    while (i <= j) {
        if (strCleaned[i] !== strCleaned[j])
            return false;
        i++;
        j--;
    }
    return true;
};
var testInput = "A man, a plan, a canal: Panama";
console.log(isPalindrome(testInput));
