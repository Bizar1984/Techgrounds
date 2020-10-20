let i = 0;
let x = ++i;
console.log(x); // 1


let z = 0;
let y = z++;
console.log(y); // 0
console.log(z); // 1

// Prefix means increment happens BEFORE the return value of the statement
// Postfix after the return of the statement
// For loop
for(let postfix = 0; postfix < 5; postfix++) {
    console.log(postfix);
};
// number is not incremented until AFTER the first loop
// assignment is done first, then the variable is incremented

// prefix, increments starts BEFORE assignment

// last example
let a = 0;
for (let b = 0; a < 5; a = b++) {
    console.log(b); // 0, 1, 2, 3, 4, 5
    // when a is 4, b is five
}

let prefixing = 0;
for (let w = 0; prefixing < 5; prefixing = ++w) {
    console.log(prefixing); // 0, 1, 2, 3, 4
}




