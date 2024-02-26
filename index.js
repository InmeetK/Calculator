const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('Please enter the operator: ')
const operator = readline.prompt();
console.log('\nPlease enter some your first number: ');
const arg1 = readline.prompt();
const num1 = +arg1;
console.log('\nPlease enter some your second number: ');
const arg2 = readline.prompt();
const num2 = + arg2;

var result;
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
}
console.log("Result: " + result);
