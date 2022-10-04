//this registers the button click events when the
document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
document.getElementById("workout-to-met").onclick = workoutToMet;
document.getElementById("calc-calories").onclick = calculateCalories;

//convert lbs to kgs from the input fields in the page and send output to the console
function lbsToKgs()
{
    //write your code here - get the lbs value from the textbox, convert to kgs
    //and display using the output() function d
}

//determine MET value for exercises in the dropdown list and send output to the console
function workoutToMet()
{
    //write your code here - get the MET value from the dropdown and display using the
    //output() function
}

//Calculates the calories burned per minute, given the inputs from the page and sends the output to the console
function calculateCalories()
{
    //write your code here - get the kgs and MET values from the textboxes and display using the
    //output() function
}

//this function takes the provided message and prints it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}

