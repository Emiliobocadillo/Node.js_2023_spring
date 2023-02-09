// --------------------------------------
// Strings
// --------------------------------------


// EXERCISE 3 - ADD NUMBERS FROM STRING TO FLOAT

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const resultOne = Number(numberOne) + Number(numberTwo);
console.log(resultOne);
// --------------------------------------


// EXERCISE 4 - ADD THE NUMBERS AND SHOW THE TOTAL WITH 2 DECIMALS

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const resultTwo = Number(anotherNumberOne) + Number(anotherNumberTwo);
const resultTwoWithTwoDecimals = resultTwo.toFixed(2);
console.log(resultTwoWithTwoDecimals);
// --------------------------------------


// EXERCISE 5 - DECIMALS AND AVERAGE

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sum = one + two + three;
const average = (sum / 3).toFixed(5);
console.log(average);
// --------------------------------------


// EXERCISE 6 - GET THE CHARACTER BY INDEX

const letters = "abc";
// Get me the character "c"

const charCOne = letters[2];
const charCTwo = letters.charAt(2);
// --------------------------------------


// EXERCISE 7 - REPLACE

const fact = "You are learning javascript!";

// Capitalize the J in Javascript

const factCapitalizedWithJ = fact.replace("j", "J");
// --------------------------------------
