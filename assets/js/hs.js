var back = document.querySelector(".back");
var scores = localStorage.getItem("quizScores") || "[]";
var theList = document.querySelector(".scores");
var clearScores= document.querySelector(".clear");

scores = JSON.parse(scores);

var scoresJson = [];

var listItem = document.createElement("ol");
theList.appendChild(listItem);

for (var i = 0; i < scores.length; i++) {
    var names = JSON.parse(scores[i]);
    scoresJson.push(names);    
}

scores = scoresJson.sort(function(a,b) { 
    return b['score']-a['score']
});

for (var i = 0; i < scores.length; i++) {
    var names = scores[i];
    var displayItem = document.createElement("li");
    displayItem.setAttribute("class", "listitem");
    displayItem.textContent = names['name'] + " " + names['score'];
    listItem.appendChild(displayItem);
    
}
clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

back.addEventListener("click", function() {
    window.location.replace("./index.html");
});

