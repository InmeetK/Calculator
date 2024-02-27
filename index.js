const readline = require('readline-sync');

function printWelcomeMessage() {
    console.log('\nWelcome to the calculator!');
    console.log('==========================');
}

function performOneCalculation() {
    console.log('\nPlease enter the operator: ');
    const operator = readline.prompt();

    const count = printAndGetNum('\nHow many numbers do you want to ' + operator + ': ');
    const array = getNumberArray(count);
    const result = calculateResult(array, operator);

    console.log('\nResult: ' + result);
}

function getNumberArray(count) {
    let array = new Array(count);
    for (let i = 0; i < count; i++) {
        array[i] = printAndGetNum('\nPlease enter number ' + (i + 1) + ': ');
    }
    return array;
}

function calculateResult(array, op) {
    let count = array.length;
    let result = array[0];
    for (let i = 1; i < count; i++) {
        result = applyOperator(result, array[i], op);
    }
    return result;
}

function printAndGetNum(input) {
    console.log(input);
    const promptInput = readline.prompt();
    const num = +promptInput;
    if (isNaN(num)) {
        console.log('\n ||That input was not a number, try again.||')
        return printAndGetNum(input);
    }
    return num;
}

function applyOperator(arg1, arg2, op) {
    switch (op) {
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            return arg1 / arg2;
    }
}

printWelcomeMessage();
let again = true;
while (again) {
    performOneCalculation();
}