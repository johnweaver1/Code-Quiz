var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correct: "parentheses"
    },
    {
        question: "A very useful tool used during devlopment and debugging for printing content to the debuger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log"
    },
    {
        question: "Arrays in JavaScript can be used to store",
        answers: ["numbers and string", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
];
var button = document.querySelector(".startButton")
var timeLeft = 50;
var timer;

button.addEventListener("click", function(){
    startTimer();
});



function startTimer() {
    // Sets interval in variable
    timer = setInterval(function() {
      timeLeft--;
      var timeEl = document.querySelector('.timer');
      timeEl.textContent = timeLeft;
  
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timer);
      }
    }, 1000);
  }