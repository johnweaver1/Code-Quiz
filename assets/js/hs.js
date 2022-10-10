var back = document.querySelector(".go_back");
var scores = localStorage.getItem("quizScores") || "[]";
var theList = document.querySelector(".score_list");
var clearScores= document.querySelector(".clear_high_scores");

scores = JSON.parse(scores);

var scoresJson = [];

var listItem = document.createElement("ol");
theList.appendChild(listItem);

for (var i = 0; i < scores.length; i++) {
    var names = JSON.parse(scores[i]);
    scoresJson.push(names);    
}

scores = scoresJson.sort(function(a,b) { return b['score']-a['score']});

for (var i = 0; i < scores.length; i++) {
    var names = scores[i];
    var displayItem = document.createElement("li");
    displayItem.setAttribute("class", "listitem");
    displayItem.textContent = names['name'] + " - " + names['score'];
    listItem.appendChild(displayItem);
    
}

back.addEventListener("click", function() {
    window.location.replace("./index.html");
});

clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});