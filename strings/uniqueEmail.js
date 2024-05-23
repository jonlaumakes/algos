//  Input: ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
// Output: 2.
// emails are local names separated by @ sign
// periods are ignored in the translated email address
// '+' in the local part of the address -> ignores everything after it for local names
var countUniqueEmails = function (emails) {
    var count = 0;
    var emailMap = {};
    for (var _i = 0, emails_1 = emails; _i < emails_1.length; _i++) {
        var email = emails_1[_i];
        var split = email.split("@");
        var name_1 = split[0];
        var domain = split[1] || null;
        console.log("name, domain", name_1, domain);
        // clean the name by splitting out the '+'
        var namePrefix = name_1.split("+")[0];
        var namePrefixPeriodsRemoved = namePrefix.split(".").join("");
        var cleanedEmailAddress = namePrefixPeriodsRemoved + "@" + domain;
        //add to map
        if (!(cleanedEmailAddress in emailMap)) {
            emailMap[cleanedEmailAddress] = 0;
        }
        emailMap[cleanedEmailAddress] += 1;
        console.log(emailMap);
    }
    return Object.keys(emailMap).length;
};
console.log(countUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
]));
