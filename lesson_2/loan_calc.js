const MESSAGES = require('./loan_calc_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' ||
  Number.isNaN(Number(number)) ||
  Number(number) < 0;
}
prompt(MESSAGES['welcome']);
while (true) {

  prompt(MESSAGES['loanA']);
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES['notvalid']);
    loanAmount = readline.question();
  }

  prompt(MESSAGES['intrestR']);
  let intrestRate = readline.question();
  let monthlyIR = intrestRate / 12;

  while (invalidNumber(intrestRate)) {
    prompt(MESSAGES['notvalid']);
    intrestRate = readline.question();
  }

  prompt(MESSAGES['loanD']);
  let loanDur = readline.question();

  while (invalidNumber(loanDur)) {
    prompt(MESSAGES['notvalid']);
    loanDur = readline.question();
  }

  let output = loanAmount * (monthlyIR /
  (1 - Math.pow((1 + monthlyIR), (-1 * loanDur))));

  prompt(`Your monthly payment is : $${output}`);

  prompt(MESSAGES['again']);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;

  else ( console.clear());

}
