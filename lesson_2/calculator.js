// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// perform the operation on the two numbers.
// print the result to the terminal.

const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);
while (true) {
  // ask for two numbers
  // ask for operation
  // perform operation and display results


prompt(MESSAGES['first']);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(MESSAGES['notvalid']);
  number1 = readline.question();
}

prompt(MESSAGES['second']);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(MESSAGES['notvalid']);
  number2 = readline.question();
}

prompt(MESSAGES['whatop']);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(MESSAGES['notvalid']);
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}`);

prompt(MESSAGES['again']);
let answer = readline.question();

if (answer[0].toLowerCase() !== 'y') break;
}
