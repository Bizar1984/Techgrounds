console.log("Techgrounds JS Beginnings");

const getal2 = 500;
console.log("Getal2: " + getal2); //Getal2 500

let getal3 = 250;
console.log("Getal3: " + getal3);

let datatype = true;
console.log("datatype: " + typeof datatype); // boolean

// String staat tussen aanhalingstekens
let numberString = "25";
let randomNumber = 25;
let randomNumberTwo = 25;
console.log(numberString + " " + randomNumber); // 25 25

// add two values
let sum = function(x, y) {
    return x + y;
}
console.log(sum(750, 250));

// Hoe herken je bigInt?
const theBiggestInt = 9007199254740991n;
console.log(typeof theBiggestInt); //bigInt

// hoe herken je waarde symbol?
const mySymbol = Symbol();
console.log(mySymbol); // Symbol()
console.log(typeof mySymbol); // symbol

let someMath = 3 + 5 * 10 / 2;
console.log(someMath); // 28

let newNumber = 3;
newNumber++;
console.log(newNumber); //4
newNumber--;
console.log(newNumber); // 3

let numberOne = 5;
const newSum = numberOne++ + 2; 
console.log(newSum); // 7

let numberTwo = 12;
let increment = ++numberTwo;
const sumTwo = ++numberTwo + 2;
console.log(increment); //13
console.log(sumTwo); //15

let numberThree = 12;
numberThree += 4;
console.log(numberThree);

// andere manier van schrijven
let summingUp = numberThree + 4; //20 Numberthree is 16 geworden!
console.log(summingUp);

let finalNumber = 10;
finalNumber += 10; //20
finalNumber -= 5; // 15
finalNumber *= 4; // 60
finalNumber /= 2; //30
finalNumber += .5 //30.5


console.log(Math.floor(finalNumber));

// second day
var someNumbers = [1, 2, 3, 4, 5];
for(var number of someNumbers) {
    console.log(number);
}

var numberArray = [4, 9, 16, 25];
var x = numberArray.map(Math.sqrt);
console.log(x);

var arrowNumbers = [2, 4, 6, 8];

// arrow function
arrowNumbers.map(n => {
    console.log(n);
});

let text = "learningJS";
console.log(text.charAt(4));
console.log(text.substr(1,4));
console.log(text.replace("JS", " Python"));

// continuing
let stringWorld = "The world is ";
let stringYours = "yours!";
console.log(stringWorld + stringYours);

numberString = "3";
numberThree = 3;
let combinedText = numberString + " " + numberThree;
console.log(combinedText);
console.log(typeof numberString);

// An important argument for single quotes is when you need to write html inside JavaScript:
let html = '<div id="singleQuote"></div>';

let moreText = "This is more text ";
moreText += "and it just continues";
console.log(moreText);
// could also concatenate it with the plus sign
let firstArray = [
    "Peanut butter and",
    "Jelly"
]

let secondArray = [
    "Is an awesome",
    "Sandwich"
]

let CombinedArray = firstArray.concat(secondArray);
console.log(CombinedArray);

let arraySlice = secondArray.slice(1);
console.log(arraySlice);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);

var wrongGrammar = "Ik wordt coureur";
var rightGrammar = wrongGrammar.split("t");                                        
console.log(rightGrammar);

var str = "Let us try and use the split method method method!";
var res = str.split(" ", 8); // split words from eight on
console.log(res);

// moving to another file, this one has become congested!












