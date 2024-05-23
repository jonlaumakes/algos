// Input: x = 123;
// Output: 321;

const reverseInteger = (num: number): number => {
  let isNegative = num < 0;
  if (isNegative) {
    num = num * -1;
  }

  let output = 0;
  while (num > 0) {
    const digit = num % 10;

    output = output * 10 + digit;
    num = (num - digit) / 10;

    if (output > 2 ** 31 - 1) return 0;
  }

  return isNegative ? output * -1 : output;
};

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
