// ===== Instructions =====
// You are given a list of contacts, where each contact is represented as a string of their contact name. Your task is to write a function that takes this list as an argument and returns a list of the names shortened according to the following rules:
// Shortening Rules
// First Name Only: If possible, reduce the name to just the first name.
//     First Name + Last Initial: If reducing to the first name introduces ambiguity (i.e., it creates duplicates that were not present in the original list), try shortening to the first name followed by the last initial.
//     No Shortening: If both the above rules would result in ambiguity, keep the name unchanged.

const shortenNames = (names: string[]): string[] => {
  const output = [];
  const nameMap = {};

  // iterate through names build map
  for (let name of names) {
    const nameSplit = name.split(" ");
    const firstName = nameSplit[0];
    const lastName = nameSplit[1] || null;
    const lastNamePrefix = lastName ? lastName[0] : null;

    // not in map ->
    if (!(firstName in nameMap)) {
      nameMap[firstName] = {};
    }
    // add last name
    if (!(lastNamePrefix in nameMap[firstName])) {
      nameMap[firstName][lastNamePrefix] = [];
    }
    nameMap[firstName][lastNamePrefix].push(lastName || "");
  }

  console.log("nameMap", nameMap);

  // iterate through names again
  for (let name of names) {
    const nameSplit = name.split(" ");
    const firstName = nameSplit[0];
    const lastName = nameSplit[1] || null;
    const lastNamePrefix = lastName ? lastName[0] : null;
    // check first name in map
    if (firstName in nameMap) {
      if (lastNamePrefix) {
        // todo fix:
        // check for multiple last names for any first name (Object.keys)
        // if > 1, push first + last initial
        // else use first name

        // only person with first name -> first name
        if (nameMap[firstName][lastNamePrefix].length <= 1) {
          output.push(`${firstName} ${lastNamePrefix}`);
        }

        // duplicate first and last initial -> full name
        if (nameMap[firstName][lastNamePrefix].length > 1) {
          output.push(name);
        }
      } else {
        // no last name -> push name
        output.push(name);
      }
    }
  }

  return output;
};

const shortenNames1 = (names: string[]): string[] => {
  const output = [];

  // iterate names and create a map based off first names
  // {alex: {n: [Nelson], m: [Man] , b: [bendle]}, joe: {}, dan: {s: [stern]}, john: {l:[lark]} }
  const nameMap = {};

  for (let name of names) {
    const split = name.split(" ");
    const firstName = split[0];
    const lastName = split[1];

    if (!(firstName in nameMap)) {
      nameMap[firstName] = {
        firstNameCount: 0,
      };
    }
    nameMap[firstName].firstNameCount += 1;
    // if lastName -> k: last initial v: lastname
    if (lastName) {
      const lastInitial = lastName[0];
      // if ! lastInitial Index
      if (!(lastInitial in nameMap[firstName])) {
        nameMap[firstName][lastInitial] = 0;
      }
      nameMap[firstName][lastInitial] += 1;
    }
  }

  console.log("nameMap", nameMap);

  for (let name of names) {
    const split = name.split(" ");
    const firstName = split[0];
    const lastName = split[1];

    // only person with first name OR only first name provided
    if (nameMap[firstName].firstNameCount === 1 || !lastName) {
      output.push(firstName);
      continue;
    }

    // multiple people with first name
    if (nameMap[firstName].firstNameCount > 1) {
      const lastInitial = lastName[0];
      const firstNameAndLastInitialCount = nameMap[firstName][lastInitial];
      // only person with last name initial
      if (firstNameAndLastInitialCount === 1) {
        output.push(`${firstName} ${lastInitial}`);
      }
      // !only person with last name initial (dan Stern)
      if (firstNameAndLastInitialCount > 1) {
        output.push(`${firstName} ${lastName}`);
      }
    }
  }

  return output;
};

const testNames = [
  "Joe",
  "Alex Nelson",
  // "Alex Naylor",
  "Alex Man",
  "Alex Bendle",
  "Dan Stern",
  "Dan Stern",
  "John Lark",
];

console.log(shortenNames1(testNames));
// Output: ["Joe", "Alex N", "Alex M", "Alex B", "Dan Stern", "Dan Stern", "John"]
