$(document).ready(function(){
  // your code here


// count-down clock. Initial value is 10 seconds


var count=10;
var $secondsLeft = $("#secondsLeft");
var $solutionInput = $("#solution-input");


//to start the game
$solutionInput.keydown(function() {
  counter = setInterval(time, 1000);
  console.log("hey");
});

function time() {
  count--
  $secondsLeft.text(count);
  if (count === 0) {
    clearInterval(counter);
  }
};

time();

//MY PREVIOUS TIMER FUNCTION
// var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

// function timer() {
//   count--;
//     if (count <=0) {
//       clearInterval(counter);
//     }
// }

// $("#secondsLeft").text(count);

// timer();

// When the user inputs any character in the solution input: isNumeric(1) returns Boolean value true if there is a number
// Timer will start counting down


  // Do code for showing the number of seconds here



// var startGame = function(){
//     $("#solution-input").numeric()
//       if ($(this)==1) {
//       timer ();
//     }
//   };


// random math problem to solve. Initial operation is addition only: ie. (2 + 5 = <input>)

var number1 = $("#num1").text(1+ Math.floor(Math.random() *10));
// provides a random number between 1 and 10

var number2 = $("#num2").text(1+ Math.floor(Math.random() *10));
// provides a random number between 1 and 10

//User to input answer

var input = $("#solution-input").val();

var solutionAnswer= ($("#num1")+$("#num2"));

function checkAnswer (num1, num2, input) {
  var solution = num1+num2;
  if (input===solution) {
    console.log("woohoo");
  } else console.log("toobad");
}

checkAnswer(num1, num2, $("#solution-input").val());


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
