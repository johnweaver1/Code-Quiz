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
var questionArea = document.querySelector(".quizZone")
var timeLeft = 50;
var timer;
var array = 0;
var userScore = 0;

button.addEventListener("click", function(){
    startTimer();
    createTheQuiz(array);
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

function createTheQuiz(array) {
    var createQuestion = document.createElement("div");
    createQuestion.setAttribute("class", "text");
    createQuestion.textContent = questions[array]["question"]
    
    var createAnswers = document.createElement("div");
    createAnswers.setAttribute("class", "selection")
    for (var i=0; i<4; i++) {
        var selections = document.createElement("button");
        selections.setAttribute("class", "option")
        selections.textContent = questions[array]["answers"][i];
        selections.addEventListener("click", choices);
        createAnswers.appendChild(selections);
    }
    questionArea.appendChild(createQuestion);
    questionArea.appendChild(createAnswers);
}
function choices(beep) {
    var userSelection = beep.target.textContent;
    if (userSelection == questions[array]["correct"]) {
        userScore += 5;
    } else {
        userScore-=5;
        timeLeft-=10;
    }
    array++;
    
    if (array == questions.length){
        clearInterval(timer);

    }
}

