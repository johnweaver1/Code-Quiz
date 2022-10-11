// All the questions to be used in the quiz.
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
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
// global variables
const button = document.querySelector(".startButton")
var timeLeft = 75;
var timer;
var array = 0;
var userScore;
// if the start button is clicked then the game begins!
button.addEventListener("click", function(){
    button.remove();
    startTimer();
    createTheQuiz(array);
});
//How the timer is started and finished
function startTimer() {
    // Sets interval in variable
    timer = setInterval(function() {
      timeLeft--;
      var time = document.querySelector('.timer');
      time.textContent = timeLeft;
  
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timer);
        createFinalScore();
      }
    }, 1000);
  }
//How I decided to create the quiz. I learned clearing the DOM would have been easier.
function createTheQuiz(array) {
    var questionArea = document.querySelector(".quizZone")
    // creating a div element for all my quiz info
    var bigBox = document.createElement("div")
    bigBox.setAttribute("class", "quizZone")

    var createQuestion = document.createElement("div");
    createQuestion.setAttribute("class", "text");

    createQuestion.textContent = questions[array]["question"]
    
    var createAnswers = document.createElement("div");
    createAnswers.setAttribute("class", "selection")
// this is creating all my selectable quiz answers.
    for (var i=0; i<4; i++) {
        var selections = document.createElement("button");
        selections.setAttribute("class", "option")
        selections.textContent = questions[array]["answers"][i];
        selections.addEventListener("click", choices);
        createAnswers.appendChild(selections);
        var next = document.createElement("br");
        createAnswers.appendChild(next);
    }
// appending my items so that they appear
    bigBox.appendChild(createQuestion);
    bigBox.appendChild(createAnswers);
// setting my parent node to question area over the previous areas!
    questionArea.parentNode.replaceChild(bigBox, questionArea);


}
// How answering questions affects your timer which in turn affects your score. 
function choices(beep) {
    var userSelection = beep.target.textContent;
    if (userSelection == questions[array]["correct"]) {
        timeLeft += 0;
    } else {
        timeLeft-=10;
    }
    array++;
    
    if (array == questions.length){
        userScore=timeLeft;
        var time = document.querySelector('.timer');
        time.textContent = timeLeft;
        createFinalScore();
        clearInterval(timer);
    }  else {    
        createTheQuiz(array);
    }
}
// this is the big function to create your score.
function createFinalScore() {
    timeLeft = 75;
    array = 0;
    var questionArea = document.querySelector(".quizZone");
    var bigBox = document.createElement("div");

    bigBox.setAttribute("class", "quizZone");
// all these are for defining elements that are apart of the score keeping!
    var createQuestion = document.createElement("div");
    createQuestion.setAttribute("class", "text");
    createQuestion.textContent = "It is finished";

    var createScore = document.createElement("div");
    createScore.setAttribute("class", "score");
    createScore.textContent = "Your final score is: " + userScore;

    var createHighScore = document.createElement("form");

    var createName = document.createElement("label");
    createName.setAttribute("for","initials");
    createName.textContent = "Enter your name: "

    var initials = document.createElement("input");
    initials.setAttribute("type","text");

    var next = document.createElement("br");
// this is for creating the highscore submission box
    var createHighScoreSubmission = document.createElement("button");
    createHighScoreSubmission.setAttribute("class","startButton");
    createHighScoreSubmission.textContent = "Submit";

    createHighScoreSubmission.addEventListener("click", function() {
        var quizScore = {
            name: initials.value,
            score: userScore
        };
        userScore = 0;

        var quizScores = localStorage.getItem("quizScores") || "[]";
        console.log(quizScores);
        quizScores = JSON.parse(quizScores);
        quizScores.push(JSON.stringify(quizScore))
        localStorage.setItem("quizScores", JSON.stringify(quizScores));

        window.location.replace("./highscore.html");
    });
// appending all the stuff I need!
    bigBox.appendChild(createQuestion);
    bigBox.appendChild(createScore);
    bigBox.appendChild(createHighScore);
    bigBox.appendChild(createName);
    bigBox.appendChild(initials);
    bigBox.appendChild(next);
    bigBox.appendChild(createHighScoreSubmission);

    questionArea.parentNode.replaceChild(bigBox, questionArea);
 }
