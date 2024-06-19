const readline = require('readline-sync');

function printAndGetInput(input) {
    console.log(input);
    return readline.prompt();
}

function printAndGetNum(input) {
    const promptInput = printAndGetInput(input);
    const num = +promptInput;
    if (isNaN(num)) {
        console.log('\n ||That input was not a number, try again.||')
        return printAndGetNum(input);
    }
    return num;
}

module.exports = {
    printAndGetInput,
    printAndGetNum
}