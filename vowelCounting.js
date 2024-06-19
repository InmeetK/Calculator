const userInput = require('./userInput');

function performOneVowelCountingCalculation() {
    const inputStr = userInput.printAndGetInput('Please enter a string: ');
    const vowelObj = countVowelsInString(inputStr);
    printVowelCounts(vowelObj);
}

function printVowelCounts(vowelObj) {
    console.log(
        `The vowel counts are: 
        A: ${vowelObj.aCount}
        E: ${vowelObj.eCount}
        I: ${vowelObj.iCount}
        O: ${vowelObj.oCount}
        U: ${vowelObj.uCount}`)
}
function countVowelsInString(string) {
    const vowelObj = {
        aCount: 0,
        eCount: 0,
        iCount: 0,
        oCount: 0,
        uCount: 0,
    };
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case ('a'):
            case('A'):
                vowelObj.aCount++;
                break;

            case('e'):
            case('E'):
                vowelObj.eCount++;
                break;

            case('i'):
            case('I'):
                vowelObj.iCount++;
                break;

            case('o'):
            case('O'):
                vowelObj.oCount++;
                break;

            case('u'):
            case('U'):
                vowelObj.uCount++;
                break;
            default:
        }
    }
    return vowelObj;
}

module.exports = {
    performOneVowelCountingCalculation
}