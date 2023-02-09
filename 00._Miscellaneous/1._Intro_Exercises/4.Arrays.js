// --------------------------------------
// Arrays, for loops
// --------------------------------------


// EXERCISE 1 - ARRAY POSITIONING

const letters = ["a","b","c"];

// show b in the console 

console.log(letters[1]);
// --------------------------------------


// EXERCISE 2 - ARRAY POSITIONING

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.

const friend1 = { name: "Gary", age: 25, knownSince: "2021-03-25" };
const friend2 = { name: "Maria", age: 26, knownSince: "2019-07-12" };
const friend3 = { name: "James", age: 30, knownSince: "2022-08-08" };

friends.push(friend1, friend2, friend3);
// --------------------------------------


// EXERCISE 3 - GET THE INDEX OF FIRST OCCURANCE OF THAT VALUE. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

significantMathNumbers.indexOf(1729);
// --------------------------------------


// EXERCISE 4 - INSERTING ELEMENTS

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(diet.indexOf("rocket"), 0, "hamburger", "soda", "pizza");
// --------------------------------------


// EXERCISE 5 - REMOVE ELEMENT

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already.

diet.pop();
// --------------------------------------


// EXERCISE 6 - COPY ARRAY

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = diet;
// --------------------------------------


// EXERCISE 7 - FOR LOOP

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for(let i = lettersExpanded.indexOf("b"); i < lettersExpanded.length; i+=2){
    console.log(lettersExpanded[i]);
};
// --------------------------------------


// EXERCISE 8 - FOR LOOP AND IF STATEMENT

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 6 || numbers[i] < 0){
        console.log(numbers[i]);
    } else{
        discardedNumbers.push(numbers[i]);
    }
};
// --------------------------------------


