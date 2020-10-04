// logging text to the console
function printHelloWorld() {
    console.log("Hello World");
}

printHelloWorld();

function displayText() {
    console.log("This is a string with some text");
}

displayText();


// display number
function divideNumbers(x, y) {
    return x / y;
}

console.log(divideNumbers(100, 5));

// multiplication
function multiplyNumbers(x, y) {
    return x * y;
}

console.log(multiplyNumbers(100, 5));

// checking names
let namesArray = [
    "John",
    "Olly",
    "Mo",
    "Hendrik",
    "Tony"
]

function checkNames() {

    input = document.getElementById("nameInput").value;

    if(input.includes(namesArray[0]) || input.includes(namesArray[1]) || input.includes(namesArray[2]) || input.includes(namesArray[3]) || input.includes(namesArray[2])) {
        document.getElementById("checkNames").innerHTML = "Dat is een bekende van ons";

    } else {
        document.getElementById("checkNames").innerHTML = "Onbekend in ons systeem!";
    }

}

// better way
let namesArrayTwo = ['Bombadil', 'Benazir', 'Dijksoorn', 'John', 'Olly', 'Mo', 'Hendrik', 'Tony', 'Derryck', 'Lassoefar', 'Brizzy', 'Octaaf', 'Sean'];

function checkNamesTwo() {

    if (namesArrayTwo.indexOf($("input.nameInputTwo").val()) > -1) {

        document.getElementById("checkNamesTwo").innerHTML = "Bevoegd!";

    } else {
        document.getElementById("checkNamesTwo").innerHTML = "Persoon onbevoegd. Verlies hem/haar niet uit het oog!";
    }
}

// generate random name


function generateRandomName() {

    let shuffle = Math.floor(Math.random() * namesArray.length);
    document.getElementById("random-name").innerHTML = namesArrayTwo[shuffle];
}

// same idea but with an arrow function
generateRandomNameTwo = () => {

    let shuffle = Math.floor(Math.random() * namesArray.length);
    console.log(namesArrayTwo[shuffle]);
    document.getElementById("random-name").innerHTML = namesArrayTwo[shuffle];
}

generateRandomNameTwo();




