// bitwise operations
function bitwiseAND(n1, n2) {
    let bitwise = n1 & n2;
    let convertToBinary = bitwise.toString(10);
    return convertToBinary;
}

console.log(bitwiseAND(7, 12));

// return smallest number in array
const array = [37,-5,-15,-37,5,15]

array.sort() // Default is lexicographical sort
console.log(array.join(", ")) // -15, -37, -5, 15, 37, 5

array.sort((a,b) => a-b) // Sort numerically, ascending
console.log(array.join(", ")) // -37, -15, -5, 5, 15, 37

const min = array[0]
const max = array[array.length-1]
console.log(`Minimum: ${min}, Maximum: ${max}`) // Minimum: -37, Maximum: 37

// what's next?



  
    


