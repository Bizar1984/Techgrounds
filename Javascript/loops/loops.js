const sports = [
    "Hobby Horsing",
    "Chess Boxing",
    "Bog Snorkeling",
    "Zorbing",
    "Cheese Rolling",
    "Underwater Hockey",
    "Lawn Mower Racing"
];

for (let i = 0; i < sports.length; i++) {
    const element = sports[i];
    console.log(element);
    
}

// let us try to get the odd indexes only
for (let i = 0; i < sports.length; i++) {
    const element_odd = i;
    if(element_odd % 2 != 0) {
        console.log(sports[element_odd]);
    }
}

// let us try to get the even indexes only
for (let i = 0; i < sports.length; i++) {
    
    const element_even = i;
    if(element_even % 2 === 0) {
        console.log(sports[element_even]);
    }
}

// let us try to get the first and last indices only
first_index = sports[0];
last_index = sports.length - 1;
console.log(first_index);
console.log(sports[last_index]);

for (let i = 0; i < 21; i++) {
    console.log(i);
}

// 7 in the array? then print BOOOOM!
function sevenBoom(arr) {
    for(let i = 0; i < arr.length; i++) {

        let elementAgain = arr[i];
        let includes_seven = arr.includes(7);
         
        if(elementAgain == includes_seven) {
            return "BOOOOM!";
        } else text = "There is no 7 in the array!"
    }

    return text;
}

console.log(sevenBoom([1, 3, 5, 9, 23, 6, 7]));
        
        
// lets print the weird sports in a do while loop
let i = 0;
let arrayLength = sports.length;

while(i < arrayLength ) {
    let val = sports[i];   
    i++;
    console.log(val);
}

// same thing maar dan for in
for(let val in sports) {
        console.log(sports[val]);
}

// last one, the for of loop
for(const item of sports) {
    console.log(item);
}

// while loop which iterates three times
// within it a for loop which iterates 10 times
// first iteration 1 to 10
// second iteration even numbers to 20
// third iteration table count 3. Table count, is that a word?
var elephant = 0;

console.time('Run Loop');
    while(elephant <= 4){

        for(var elephant = 1; elephant < 11; elephant++) {
            if(elephant === 11) {
                break;
            }
            console.log(elephant);
        }
        for(elephant = 1; elephant < 21; elephant++) {
            let even_numbers = elephant;
            if(even_numbers % 2 === 0)  {
                console.log(elephant)
                
            }
        }
        for(elephant = 1; elephant < 11; elephant++) {
            console.log(elephant * 3);
        }
    }

console.timeEnd('Run Loop');

// fibonacci, the first 50 numbers
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;

  };
};

const arr = fibonacci_series(49);
console.log(arr);

// bubblesort
let finalNumberArray = [2,7,5,10,4,9,3,1,8,6];
function findSmallestIndex(array) {

    var smallestElement = array[0]; // Stores the smallest value
    var smallestIndex = 0; // Stores the index of the smallest value
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] < smallestElement) {
        smallestElement = array[i];
        smallestIndex = i;
      }
    }
  
    return smallestIndex;
  }
  
  // 2. Sort the array
  function selectionSort(array) {

    var sortedArray = [];
    var length = array.length;
  
    for (var i = 0; i < length; i++) {
      // Finds the smallest element in the array 
      var smallestIndex = findSmallestIndex(array);
      // Adds the smallest element to new array
      sortedArray.push(array.splice(smallestIndex, 1)[0]);
    }
  
    return sortedArray;
  }

  console.log(selectionSort(finalNumberArray));



    
    
