'use strict';

function binary_search(list, item) {
  let low = 0; //index 0, first item in the array
  let high = list.length - 1;  //last index of any given list
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return null;
}

const my_list = [1, 3, 5, 7, 9, 11, 13, 15];


console.log(my_list.length -1); // 7
console.log(my_list[4]); // 9

// if the value exists in the array, return the index number
console.log(binary_search(my_list, 13)); // 6

// how many guesses needed?
console.log(Math.log2(8));  
// only 3! for some reason this is not logged to the terminal using node, but browser works fine..
// why is this?


