const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
const userInput = require('./userInput.js');
const arithmetic = require('./arithemetic');
const vowelCounting = require('./vowelCounting');

function printWelcomeMessage() {
    console.log('\nWelcome to the calculator!');
    console.log('==========================');
}

function getCalculationMode() {
    const mode = userInput.printAndGetInput(
        `\nWhich calculator mode do you want?
        1) Arithmetic
        2) Vowel Counting`);
    if (mode == ARITHMETIC_MODE || mode == VOWEL_COUNTING_MODE) {
        return mode;
    } else {
        console.log('Please enter a number corresponding to one of the following modes.')
        return getCalculationMode();
    }
}

printWelcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode == ARITHMETIC_MODE) {
        arithmetic.performOneArithmeticCalculation();
    } else if (calculationMode == VOWEL_COUNTING_MODE) {
        vowelCounting.performOneVowelCountingCalculation();
    }
}