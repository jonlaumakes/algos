//  Input: ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
// Output: 2.

// emails are local names separated by @ sign
// periods are ignored in the translated email address
// '+' in the local part of the address -> ignores everything after it for local names

const countUniqueEmails = (emails: string[]): number => {
  let count = 0;
  const emailMap = {};

  for (let email of emails) {
    const split = email.split("@");
    const name = split[0];
    const domain = split[1] || null;

    console.log("name, domain", name, domain);
    // clean the name by splitting out the '+'
    let namePrefix = name.split("+")[0];
    let namePrefixPeriodsRemoved = namePrefix.split(".").join("");
    const cleanedEmailAddress = namePrefixPeriodsRemoved + "@" + domain;
    //add to map
    if (!(cleanedEmailAddress in emailMap)) {
      emailMap[cleanedEmailAddress] = 0;
    }
    emailMap[cleanedEmailAddress] += 1;
    console.log(emailMap);
  }

  return Object.keys(emailMap).length;
};

console.log(
  countUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
