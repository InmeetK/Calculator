const userInput = require('./userInput')

function performOneArithmeticCalculation() {
    const operator = userInput.printAndGetInput('\nPlease enter the operator: ')
    const count = userInput.printAndGetNum(`\nHow many numbers do you want to ${operator}: `);
    const array = getNumberArray(count);
    const result = calculateResult(array, operator);
    console.log('\nResult: ' + result);
}

function getNumberArray(count) {
    let array = new Array(count);
    for (let i = 0; i < count; i++) {
        array[i] = userInput.printAndGetNum(`\nPlease enter number ${i + 1}: `);
    }
    return array;
}

function calculateResult(array, op) {
    // let count = array.length;
    // let result = array[0];
    // for (let i = 1; i < count; i++) {
    //     result = applyOperator(result, array[i], op);
    // }
    if (op = '/') {
        array = array.filter((a) => a != 0)
    }
    let result = array.reduce((acc, next) => applyOperator(acc, next, op))
    return result;
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

module.exports = {
    performOneArithmeticCalculation
}