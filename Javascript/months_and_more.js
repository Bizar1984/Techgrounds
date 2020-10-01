let monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function translateMonth() {
    let value, months;

    value = document.getElementById("number").value;
    months = monthsArray[value -1]
    
    document.getElementById("translatedMonth").innerHTML = months;
}
    

// yesssss

// try and analyse this yourself
function getMonth(input) {
    if (input >= 1 && input <= 12) {
        printResult(monthsArray[input - 1], true);
    } else {
        printResult('Your input should be a number between 1 and 12.', false);
    }
}

function printResult(showMonth, success) {
    document.getElementById("result").style.color = "red";
    document.getElementById('result').innerHTML = showMonth;

    if (success) {
        document.getElementById("result").style.color = "white";
    }
}