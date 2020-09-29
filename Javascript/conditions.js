function checkNumber() {
    var value, text;

    // get the value of the input field with id number
    value = document.getElementById("number").value;
    parsedInteger = parseInt(value);

    if(parsedInteger === 3) {
        text = "Number is equal to three";
        console.log(typeof parsedInteger);
    } else if (value >= 4 && value < 11) {
        text = "Number is equal to, or bigger than four";
    } else if (value < 3) {
        text = "Number is smaller than three";
    } else if (value >= 11)
        text = "Number is equal to, or bigger than eleven";
    
        
    document.getElementById("label").innerHTML = text;
}

// second validation
function checkNumberTwo() {
    var value, text;

    // get the value of the input field with id number
    value = document.getElementById("second-number").value;

    if (value != 3) {
        text = "Number is not equal to three";
        reset = document.getElementById("second-number");
        reset.value = null;
    } else if (value == 3) {
        text = "Number is equal to three";
    }


    document.getElementById("label-two").innerHTML = text;
}

// strict equality comparison also checks for data type
// console.log("3" === 3) // false
function checkNumberThree() {
    var value, text;

    // get the value of the input field with id number
    value = document.getElementById("third-number").value;

    if (value > 4 && value < 11) {
        text = "Value is between five and ten"
    
    } else if (value >= 13 && value <= 23) {
        text = "Value is between 13 and 23";

    } else if (value < 5 || value > 23  && value > 10 || value < 13) {
        text = "I have trouble recognise this value"
    }
        
    document.getElementById("label-three").innerHTML = text;
}

// the fourth
function checkNumberFour() {
    var value, text;

    // get the value of the input field with id number
    value = document.getElementById("fourth-number").value;

    if (value == 21 || value == 23) {
        text = "Value equals 21, or 23"

    } else if (value > 30 || value < 35 && value > 40 || value < 45) {
        text = "Value is between 30 and 35 or between 40 and 45";

    } 

    document.getElementById("label-four").innerHTML = text;
}



    
    
    

