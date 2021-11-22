

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'

console.log(capitalizedWords.join(' '));





let string = 'launch school tech & talk';
console.log(string.toUpperCase);






last(['Earth', 'Moon', 'Mars']); 
function last(array) {
  return array[array.length - 1];
}
console.log(last);





let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy[0]['geothermal'];


let count = 0;

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count); // 3








let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
  let synonyms = vocabulary[vocabularyIdx];

  for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
    console.log(synonyms[synonymIdx]);
  }
}







function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}






function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ', ' + recipient + '!');
}
//OR you can use a template literal

function greet(greeting = 'Hello', recipient = 'world') {
  console.log(`${greeting}, ${recipient}!`);
}







function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2);
}







//Implement a function catAge that takes a number of 
//human years as input and converts them into cat years. Cat years are calculated as follows:
//The first human year corresponds to 15 cat years.
//The second human year corresponds to 9 cat years.
//Every subsequent human year corresponds to 4 cat years.
function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}