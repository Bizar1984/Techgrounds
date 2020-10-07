function checkGrade(grade, element) {
    if (grade >= 5.5 && grade <= 7.5) {
        element.style.backgroundColor = "green";
    } else if (grade >= 7.5 && grade <= 10) {
        element.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if (grade < 5.5 && grade >= 1) {
        element.style.backgroundColor = "red";
    } else if (grade > 10 || grade < 1) {
        element.style.backgroundColor = "darkgrey";
    }
}

// dutch grade
function checkDutchGrade() {

    let input_dutch = document.getElementById("dutch-grades-benazir").value;
    let result = document.querySelector(".dutch-result-benazir");

    checkGrade(input_dutch, result);

    // second run
    let value = document.getElementById("dutch-grades-samantha").value;
    let result_two = document.querySelector(".dutch-result-samantha");

    checkGrade(value, result_two);
}



// english grade
function checkEnglishGrade() {

    let input_english = document.getElementById("english-grades-benazir").value;
    setBackground(input_english);

    // second run, samantha english grades
    let value = document.getElementById("english-grades-samantha").value;
    let result_two = document.querySelector(".english-result-samantha");
    checkGrade(value, result_two);
}

function setBackground() {

    let input_english = document.getElementById("english-grades-benazir").value;
    let result_english = document.querySelector(".english-result-benazir");

    checkGrade(input_english, result_english);
}


// averages
function getLanguageAverage() {
    let dutch_grade = document.getElementById("dutch-grades-benazir").value;
    let dutch_grade_parsed = parseInt(dutch_grade);

    let english_grade = document.getElementById("english-grades-benazir").value;
    let english_grade_parsed = parseInt(english_grade);

    let average_language = (english_grade_parsed + dutch_grade_parsed) / 2;

    let final_language = document.querySelector(".benazir-language-average");

    checkGrade(average_language, final_language);

    document.getElementById("benazir-language-average").innerHTML = average_language;

    //samantha, excuse me for too much code
    let dutch_grade_samantha = document.getElementById("dutch-grades-samantha").value;
    let dutch_grade_parsed_sam = parseInt(dutch_grade_samantha);

    let english_grade_samantha = document.getElementById("english-grades-samantha").value;
    let english_grade_parsed_sam = parseInt(english_grade_samantha);

    let average_language_sam = (english_grade_parsed_sam + dutch_grade_parsed_sam) / 2;

    let final_language_sam = document.querySelector(".samantha-language-average");

    checkGrade(average_language_sam, final_language_sam);

    document.getElementById("samantha-language-average").innerHTML = average_language_sam;


};

function getOverallAverage() {
    // benazir. We need average beta + average language / 2
    let math_grade = document.getElementById("math-grades-benazir").value;
    let math_grade_parsed = parseInt(math_grade);

    let physics_grade = document.getElementById("physics-grades-benazir").value;
    let physics_grade_parsed = parseInt(physics_grade);

    let average_beta = (physics_grade_parsed + math_grade_parsed) / 2;

    // averages languages
    let dutch_grade = document.getElementById("dutch-grades-benazir").value;
    let dutch_grade_parsed = parseInt(dutch_grade);

    let english_grade = document.getElementById("english-grades-benazir").value;
    let english_grade_parsed = parseInt(english_grade);

    let average_language = (english_grade_parsed + dutch_grade_parsed) / 2;
    let overall_average_benazir = (average_language + average_beta) / 2;
    
    final_result_benazir = document.getElementById("benazir-overall-average");

    checkGrade(overall_average_benazir, final_result_benazir);

    final_result_benazir.innerHTML = overall_average_benazir;

    // zelfde trucje maar dan voor samantha.. oh my goddddd this is some bad coding
    // benazir. We need average beta + average language / 2
    let math_grade_samantha = document.getElementById("math-grades-samantha").value;
    let math_grade_parsed_samantha = parseInt(math_grade_samantha);

    let physics_grade_samantha = document.getElementById("physics-grades-samantha").value;
    let physics_grade_parsed_samantha = parseInt(physics_grade_samantha);

    let average_beta_samantha = (physics_grade_parsed_samantha + math_grade_parsed_samantha) / 2;

    // averages languages
    let dutch_grade_samantha = document.getElementById("dutch-grades-samantha").value;
    let dutch_grade_parsed_samantha = parseInt(dutch_grade_samantha);

    let english_grade_samantha = document.getElementById("english-grades-samantha").value;
    let english_grade_parsed_samantha = parseInt(english_grade_samantha);

    let average_language_samantha = (english_grade_parsed_samantha + dutch_grade_parsed_samantha) / 2;
    let overall_average_samantha = (average_language_samantha + average_beta_samantha) / 2;
    console.log(overall_average_samantha);
    final_result_samantha = document.getElementById("samantha-overall-average");

    checkGrade(overall_average_samantha, final_result_samantha)
    final_result_samantha.innerHTML = overall_average_samantha;



    // passed to bext year?
    let passed_year = document.getElementById("benazir-next-year");
    if (overall_average_benazir >= 6.5) {
        passed_year.innerHTML = "Passed!";
        passed_year.style.backgroundColor = "#00FF00";
        passed_year.style.color = "black";


    } else {
        passed_year.innerHTML = "Flunked!"
        passed_year.style.backgroundColor = "darkred";
        passed_year.style.color = "white";
    }

    let passed_year_samantha = document.getElementById("samantha-next-year");
    if (overall_average_samantha >= 6.5) {
        passed_year_samantha.innerHTML = "Passed!";
        passed_year_samantha.style.backgroundColor = "#00FF00";
        passed_year_samantha.style.color = "black";


    } else {
        passed_year_samantha.innerHTML = "Flunked!"
        passed_year_samantha.style.backgroundColor = "darkred";
        passed_year_samantha.style.color = "white";
    }

}
