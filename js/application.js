$(document).ready(function(){
  // your code here


// count-down clock. Initial value is 10 seconds

var count=10;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

// When the user inputs any character in the solution input: isNumeric(1) returns Boolean value true if there is a number
// Timer will start counting down

var solutionInputCheck
  if ($("#solution-input")>='0') {
  return true;
  } else {
    return false;
  }

if ($("#solution-input") = true) {
  function timer() {
  count = count-1;
    if (count <= -1) {
     clearInterval(counter);
     //counter ended, do something here
     return;
    }
  }

$("#secondsLeft").text(count);
  // Do code for showing the number of seconds here
}


// random math problem to solve. Initial operation is addition only: ie. (2 + 5 = <input>)

var number1 = $("#num1").text(1+ Math.floor(Math.random() *10));
// provides a random number between 1 and 10

var number2 = $("#num2").text(1+ Math.floor(Math.random() *10));
// provides a random number between 1 and 10

//User to input answer and press enter to submit. I know I need to find the char code for "enter" and input this here
var inputAnswer = $('#solution-input').val()


//solution checker variable

// var solutionCheck
//   if ($('#solution-input').val = $('num1'+'num2')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Check the user's answer against the solution:

// If the answer is empty/wrong: it will display a red border in the solution input

// if solutionCheck = false {
//   $('#solution-input').css('border','2px solid red') }

// If the answer is correct:
// Clear the solution input
// Add 10 extra seconds to the count-down clock
// Replaces question with a new math problem

// if (solutionCheck = true) {
//   $('solution-input').val('');
//   count = +=10;
// }
// When the timer hits zero:

// It will hide the solution input
// It will display:
// Game over banner
// Number of points accumulated by the user (5 per correct answer)


});
