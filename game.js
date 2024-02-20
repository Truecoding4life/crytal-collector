let star1Value;
let star2Value;
let star3Value;
let star4Value;
let scoreCounter = 0;
let winCounter = 0;
let loseCounter = 0;

$("#start").on("click", () => {
  console.log("Clicked");
  $("#WelcomeMode").hide();
  $("#GameMode").removeAttr("hidden");
});

const getRandom = (num) => {
  return Math.floor(Math.random() * num);
};
const getTargetScore = getRandom(40) + 20;
$("#star1").html(star1Value || "??");
$("#star2").html(star2Value || "??");
$("#star3").html(star3Value || "??");
$("#star4").html(star4Value || "??");

$(document).ready(function () {
  $("#target").html(getTargetScore);
});

$(".card").on("click", function () {
  const cardScore = $(this).find(".card-score");
  const getScore = getRandom(10);
  cardScore.html(getScore);
  scoreCounter += getScore;
  $("#score").html(scoreCounter);
  const targetScore = $('#target').text()
if (targetScore < scoreCounter ) {
    userLost();
    reset()
  }
  if (getTargetScore === scoreCounter) {
    userWon();
    reset()
  }
  
});

function userWon() {
  winCounter += 1;
  $("#win").html(winCounter);
  
}

function userLost() {
  loseCounter += 1;
  $("#lose").html(loseCounter);
  
}

function reset() {
  let newTargetScore = getRandom(40);
  $("#target").html(newTargetScore);
  scoreCounter = 0;
  $("#score").html(scoreCounter);
}
