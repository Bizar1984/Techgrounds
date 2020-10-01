function checkMathGrade() {

    let input_math = document.getElementById("math-grades-benazir").value;
    let result = document.querySelector(".math-result-benazir");

    if (input_math >= 5.5 && input_math <= 7.5) {
        result.style.backgroundColor = "green";
    } else if (input_math >= 7.5 && input_math <= 10) {
        result.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(input_math < 5.5 && input_math >= 1) {
        result.style.backgroundColor = "red";
    } else if (input_math > 10 || input_math < 1){
        result.style.backgroundColor = "darkgrey";
    } 

    // second run
    let value = document.getElementById("math-grades-samantha").value;
    let result_two = document.querySelector(".math-result-samantha");

    if (value >= 5.5 && value <= 7.5) {
        result.style.backgroundColor = "green";
    } else if (value >= 7.5 && value <= 10) {
        result_two.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(value < 5.5 && value >= 1) {
        result_two.style.backgroundColor = "red";
    } else if (value > 10 || value < 1){
        result_two.style.backgroundColor = "darkgrey";
    } 
}
        
// physics
function checkPhysicsGrade() {

    let input_physics = document.getElementById("physics-grades-benazir").value;
    let result = document.querySelector(".physics-result-benazir");

    if (input_physics >= 5.5 && input_physics <= 7.5) {
        result.style.backgroundColor = "green";
    } else if (input_physics >= 7.5 && input_physics <= 10) {
        result.style.backgroundColor = "rgba(156, 204, 101, 0.6)";
    } else if(input_physics < 5.5 && input_physics >= 1) {
        result.style.backgroundColor = "red";
    } else if (input_physics > 10 || input_physics < 1){
        result.style.backgroundColor = "darkgrey";
    } 

    // second run
    let value = document.getElementById("physics-grades-samantha").value;
    let result_two = document.querySelector(".physics-result-samantha");

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
function getBetaAverage() {
    let math_grade = document.getElementById("math-grades-benazir").value;
    let math_grade_parsed = parseInt(math_grade);
    
    let physics_grade = document.getElementById("physics-grades-benazir").value;
    let physics_grade_parsed = parseInt(physics_grade);
    
    let average_beta = (physics_grade_parsed + math_grade_parsed) / 2;
    
    let final_beta = document.querySelector(".benazir-beta-average");
    
        if (average_beta >= 5.5) {
            final_beta.style.backgroundColor = "green";
            
        } else {
            final_beta.style.backgroundColor = "red";

        }

        document.getElementById("benazir-beta-average").innerHTML = average_beta;

    //samantha, excuse me for too much code
    let math_grade_samantha = document.getElementById("math-grades-samantha").value;
    let math_grade_parsed_sam = parseInt(math_grade_samantha);
    
    let physics_grade_samantha = document.getElementById("physics-grades-samantha").value;
    let physics_grade_parsed_sam = parseInt(physics_grade_samantha);
    
    let average_beta_sam = (physics_grade_parsed_sam + math_grade_parsed_sam) / 2;
    
    let final_beta_sam = document.querySelector(".samantha-beta-average");
    
        if (average_beta_sam >= 5.5) {
            final_beta_sam.style.backgroundColor = "green";
            
        } else {
            final_beta_sam.style.backgroundColor = "red";

        }

        document.getElementById("samantha-beta-average").innerHTML = average_beta_sam;

    

    
};
        






