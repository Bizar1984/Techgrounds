let numberArray = [
    12,
    4,
    8,
    16,
    100,
    256,
    48,
    20,
    -16,
    0
];

let remainderNumberArray = numberArray[4] % numberArray[0];

// numberArray.length = 9
// 100 / 12 = 8. Remainder = 4

// console.log(numberArray);

let fruits = [
  'banana',
  'pineapple',
  'raspberry',
  'apple',
  'apricot'
];

// console.log(fruits[3]);

// numberArray bepaalt welke fruitsoort er geprint moet worden
// Math.random() om een getal uit de array te halen
// dat getal gebruiken we om een fruitsoort te printen
// % gebruiken voor de waarde van de eerste array
let shuffle = Math.floor(Math.random() * remainderNumberArray);
let getRandomFruitNow = fruits[shuffle];
console.log(getRandomFruitNow);

// push(), pop(), shift(), slice(), splice(),
// sort() examples
const addStrawberry = fruits.push("strawberry")
// with the push method you can add an item to the array
const popItem = fruits.pop();
// with the pop method you can remove the last item from an array
const shiftItem = fruits.shift();
// with the shift method you can remove the first item from an array
console.log(fruits);
// with the slice method you can slice part of the array
// last parameter is not inclded
let arraySliced = fruits.slice(0, 3);
// console.log(arraySliced)
// the splice method changes the original array. Add new items at position 2 and remove none
// if you choose to remove an item, the one next to the last added will be removed
let arraySpliced = fruits.splice(2, 0, "lemon", "kiwi");
// console.log(fruits)
// finally the sort method. This sorts items in alphabetic order
let sortedFruitArray = fruits.sort();
console.log(fruits);

let sortingNumbersArray = [
  3,
  1,
  18,
  7
];

// get the highest value
sortingNumbersArray.sort(function(a, b){return b-a});   
console.log(sortingNumbersArray[0]);

// get the lowest value
sortingNumbersArray.sort(function(a, b){return a-b});  
console.log(sortingNumbersArray[0]);

// sort in ascending order
sortingNumbersArray.sort(function(a, b){return a-b});
// console.log(sortingNumbersArray);

// sort in descending order
sortingNumbersArray.sort(function(a, b){return b-a});
// console.log(sortingNumbersArray);

// change the value of the first index in the array
fruits[1] = "dates";

// finally lets swap two items in the array. Let's swap the order of pineapple and raspberry [4] and [5]
[fruits[4], fruits[5]] = [fruits[5], fruits[4]];
// console.log(fruits)


// sorting algorithm. Let's leave this one for when i'm smarter
function mergeAndSort(a1, a2) {
  var matchCount = 0;
  var ret = [];

  for (var i = 0; i < a1.length; i++) {
    var val = a2[matchCount];
    if (a1[i] > val) {
      ret.push(val)
      matchCount++
      i--;
      continue;
    }
    if (a1[i] > 0) {
      ret.push(a1[i]);
    }
  }
  console.log(ret.join())
  return ret;
}

var arrayOne = [3, 4, 11, 15, 23, 34, 42]
var arrayTwo = [1, 19, 38];

mergeAndSort(arrayOne, arrayTwo)
// only works for sorted arrays