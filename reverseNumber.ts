// 123 -> 321

const reverse = (inputNum: number): number => {
    let inputIsNegative: boolean = false;
    if (inputNum < 0) {
        inputNum = inputNum * -1;
        inputIsNegative = true;
    }

    let outputNumber = 0;
    while (inputNum > 0) {
        // get the remainder from modulo 10
        const remainder = inputNum % 10;
        outputNumber = outputNumber * 10 + remainder;
        // reset the inputNum  to itself divided by 10 -> round down
        inputNum = Math.floor(inputNum/10);
    }

    return !inputIsNegative ? outputNumber : outputNumber * -1;
}