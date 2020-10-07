console.log("time for some scope assignments");

function printCarOne() {
    const carBrand = "BMW";
}

// console.log(carBrand); // not defined, variable declared in local scope

let carName;

function printCarTwo() {
    carName = "BMW" ;
}

printCarTwo();
console.log(carName); // BMW after function call


// last example
function lastPrintCar() {
    carBrand = "Audi";

    return function(type) {
        console.log(carBrand + " " + type)
    }
}

const waggie = lastPrintCar();
waggie("A Sport-Phaeton");

// I read that a closure gives you access to an outer functions scope from an inner function! What does this mean??
// Probably the lastPrintCar function is enclosed (bundled together), the return function() gives you access to the
// lexical environment, the surrounding state. The inner function is a closure... the return function
// is able to get the value carBrand = "Audi";





