
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button"); 

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked the submit button!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);

                if (gameType === "addition") {
                    displayAdditionQuestion(num1, num2);
                }
               
            }
        });
    }
});
/** 
 * the main game "loop" , called when the script is first loaded
 * and after the user's answer has been processed
 * */


function runGame () {
    // creates two random numbers between 1 and 25 
    
    let num1 = Math.floor(Math.random() * 25) + 1; 
    let num2 = Math.floor(Math.random() * 25) + 1; 

}

function checkAnswer () {

}

function calculateCorrectAnswer () {

}
function incrementScore () {

}
function incrementWrongAnswer () {

}

function displayAdditionQuestion (operand 1, operand2) {
   
    document.getElementById('operand1'").textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}
function displaySubtractQuestion () {

}
function displayMultiplyQuestion () {

}
function displayDivisionQuestion () {

}