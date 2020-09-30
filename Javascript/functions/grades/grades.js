function checkMathGrade() {

    let input = document.getElementById("tony-math").value;
    var firstBox = document.querySelector(".tony-math")

    if (input > 5.5) {
        firstBox.style.backgroundColor = "green";
    } else {
        firstBox.style.backgroundColor = "red";

    }
}

// physics
function checkPhysicsGrade() {

    let input_two = document.getElementById("tony-physics").value;
    var firstBox = document.querySelector(".tony-physics")

    if (input_two > 5.5) {
        firstBox.style.backgroundColor = "green";
    } else {
        firstBox.style.backgroundColor = "red";

    }
}

// averages
function getAverage() {
    let newInput = document.getElementById("tony-math").value;
    console.log(newInput);
    let newInput_two = document.getElementById("tony-physics").value;
    console.log(newInput_two);

    var final = document.querySelector(".tony-beta-average")

    let average = parseInt(newInput) + parseInt(newInput_two);
    let divide = average / 2;

    if (divide > 5.5) {
        final.style.backgroundColor = "green";
    } else {
        final.style.backgroundColor = "red";

    }

    document.getElementById("tony-beta-average").innerHTML = divide;

};




