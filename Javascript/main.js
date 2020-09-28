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







