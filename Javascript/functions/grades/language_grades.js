function checkDutchGrade() {

    let input_dutch = document.getElementById("dutch-grades-benazir").value;
    let result = document.querySelector(".dutch-result-benazir");

    if (input_dutch >= 5.5 && input_dutch <= 7.5) {
        result.style.backgroundColor = "green";
    } else if (input_dutch >= 7.5 && input_dutch <= 10) {
        result.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(input_dutch < 5.5 && input_dutch >= 1) {
        result.style.backgroundColor = "red";
    } else if (input_dutch > 10 || input_dutch < 1){
        result.style.backgroundColor = "darkgrey";
    } 

    // second run
    let value = document.getElementById("dutch-grades-samantha").value;
    let result_two = document.querySelector(".dutch-result-samantha");

    if (value >= 5.5 && value <= 7.5) {
        result_two.style.backgroundColor = "green";
    } else if (value >= 7.5 && value <= 10) {
        result_two.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(value < 5.5 && value >= 1) {
        result_two.style.backgroundColor = "red";
    } else if (value > 10 || value < 1){
        result_two.style.backgroundColor = "darkgrey";
    } 
}
        
// hysics
function checkEnglishGrade() {

    let input_english = document.getElementById("english-grades-benazir").value;
    let result_english = document.querySelector(".english-result-benazir");

    if (input_english >= 5.5 && input_english <= 7.5) {
        result.style.backgroundColor = "green";
    } else if (input_english >= 7.5 && input_english <= 10) {
        result_english.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(input_english < 5.5 && input_english >= 1) {
        result_english.style.backgroundColor = "red";
    } else if (input_english > 10 || input_english < 1){
        result_english.style.backgroundColor = "darkgrey";
    } 
    // second run
    let value = document.getElementById("english-grades-samantha").value;
    let result_two = document.querySelector(".english-result-samantha");

    if (value >= 5.5 && value <= 7.5) {
        result_two.style.backgroundColor = "green";
    } else if (value >= 7.5 && value <= 10) {
        result_two.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(value < 5.5 && value >= 1) {
        result_two.style.backgroundColor = "red";
    } else if (value > 10 || value < 1){
        result_two.style.backgroundColor = "darkgrey";
    } 
}


// averages
function getLanguageAverage() {
    let dutch_grade = document.getElementById("dutch-grades-benazir").value;
    let dutch_grade_parsed = parseInt(dutch_grade);
    
    let english_grade = document.getElementById("english-grades-benazir").value;
    let english_grade_parsed = parseInt(english_grade);
    
    let average_language = (english_grade_parsed + dutch_grade_parsed) / 2;
    
    let final_language = document.querySelector(".benazir-language-average");
    
    if (average_language >= 5.5 && average_language <= 7.5) {
        final_language.style.backgroundColor = "green";
    } else if (average_language >= 7.5 && average_language <= 10) {
        final_language.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(average_language < 5.5 && average_language >= 1) {
        final_language.style.backgroundColor = "red";
    } else if (average_language > 10 || average_language < 1){
        final_language.style.backgroundColor = "darkgrey";
    } 

        document.getElementById("benazir-language-average").innerHTML = average_language;

    //samantha, excuse me for too much code
    let dutch_grade_samantha = document.getElementById("dutch-grades-samantha").value;
    let dutch_grade_parsed_sam = parseInt(dutch_grade_samantha);
    
    let english_grade_samantha = document.getElementById("english-grades-samantha").value;
    let english_grade_parsed_sam = parseInt(english_grade_samantha);
    
    let average_language_sam = (english_grade_parsed_sam + dutch_grade_parsed_sam) / 2;
    
    let final_language_sam = document.querySelector(".samantha-language-average");
    
    if (average_language_sam >= 5.5 && average_language_sam <= 7.5) {
        final_language_sam.style.backgroundColor = "green";
    } else if (average_language_sam >= 7.5 && average_language_sam <= 10) {
        final_language_sam.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(average_language_sam < 5.5 && average_language_sam >= 1) {
        final_language_sam.style.backgroundColor = "red";
    } else if (average_language_sam > 10 || average_language_sam < 1){
        final_language_sam.style.backgroundColor = "darkgrey";
    } 

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
    console.log(overall_average_benazir);
    final_result_benazir = document.getElementById("benazir-overall-average");

    if (overall_average_benazir >= 5.5 && overall_average_benazir <= 7.5) {
        final_result_benazir.style.backgroundColor = "#33691e";
    } else if (overall_average_benazir >= 7.5 && overall_average_benazir <= 10) {
        final_result_benazir.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(overall_average_benazir < 5.5 && overall_average_benazir >= 1) {
        final_result_benazir.style.backgroundColor = "red";
    } else if (overall_average_benazir > 10 || overall_average_benazir < 1){
        final_result_benazir.style.backgroundColor = "darkgrey";
    } 
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

    if (overall_average_samantha >= 5.5 && overall_average_samantha <= 7.5) {
        final_result_samantha.style.backgroundColor = "#33691e";
    } else if (overall_average_samantha >= 7.5 && overall_average_samantha <= 10) {
        final_result_samantha.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(overall_average_samantha < 5.5 && overall_average_samantha >= 1) {
        final_result_samantha.style.backgroundColor = "red";
    } else if (overall_average_samantha > 10 || overall_average_samantha < 1){
        final_result_samantha.style.backgroundColor = "darkgrey";
    } 
    final_result_samantha.innerHTML = overall_average_samantha;



    // passed to bext year?
    let passed_year = document.getElementById("benazir-next-year");
    if(overall_average_benazir >= 6.5) {
        passed_year.innerHTML = "Passed!";
        passed_year.style.backgroundColor = "#00FF00";
        passed_year.style.color = "black";

        
    } else {
        passed_year.innerHTML = "Flunked!"
        passed_year.style.backgroundColor = "darkred";
        passed_year.style.color = "white";
    }

    let passed_year_samantha = document.getElementById("samantha-next-year");
    if(overall_average_samantha >= 6.5) {
        passed_year_samantha.innerHTML = "Passed!";
        passed_year_samantha.style.backgroundColor = "#00FF00";
        passed_year_samantha.style.color = "black";

        
    } else {
        passed_year_samantha.innerHTML = "Flunked!"
        passed_year_samantha.style.backgroundColor = "darkred";
        passed_year_samantha.style.color = "white";
    }
            
}




        






