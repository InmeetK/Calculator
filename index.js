const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Please enter the operator: ')
const operator = readline.prompt();

console.log('How many numbers do you want to ' + operator + ': ');
const argCount = readline.prompt();
const count = +argCount;

let array = new Array(count);
for (let i = 0; i < count; i++) {
    console.log('\nPlease enter number ' + (i + 1) + ': ');
    const argInput = readline.prompt();
    array[i] = +argInput;
}

let result = array[0];
for (let i = 1; i < count; i++) {
    switch (operator) {
        case '+':
            result += array[i];
            break;
        case '-':
            result -= array[i];
            break;
        case '*':
            result *= array[i];
            break;
        case '/':
            result /= array[i];
    }
}
console.log("Result: " + result);
