let localData = JSON.parse(localStorage.getItem('crystalQ')) ;
let star1Value;
let star2Value;
let star3Value;
let star4Value;
let scoreCounter = 0;
let winCounter = localData.win || 0 ;
let loseCounter = localData.lose || 0;

console.log(localData.win);
console.log(localData.lose);
$("#start").on("click", () => {
  console.log("Game Started Enjoy !!");
  $("#WelcomeMode").hide();
  $("#GameMode").removeAttr("hidden");
  $('#win').html(winCounter);
  $('#lose').html(loseCounter)
});

$('#nav-brand').on('click', ()=>{
  window.location.reload()
})

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
  $('#click').html('')
  $('#lose-display').html('')
  $('#win-display').html('')

  const cardScore = $(this).find(".card-score");
  const getScore = getRandom(10);
  const targetScore = $('#target').text()
  cardScore.html(getScore);
  scoreCounter += getScore;
  $('#score-display').html(`You just got  ${getScore}   point !! total score ${scoreCounter}, Target score ${targetScore} `)
  $("#score").html(scoreCounter);
if (targetScore < scoreCounter ) {
  $('#score-display').html('')
  $('#lose-display').html(`You Lost ${scoreCounter} your score gone over ${targetScore}, try to beat this score now `)
  userLost();
    reset()
  }
  if (targetScore == scoreCounter) {
    $('#score-display').html('')
    $('#win-display').html(`You won !!!! Your scored ${scoreCounter} to ${targetScore}`)

    userWon();
    reset()
  }
  
});

function userWon() {
  winCounter += 1;
  localStorage.setItem('crystalQ', JSON.stringify({win: winCounter, lose: loseCounter}))
  $("#win").html(winCounter);
  
}

function userLost() {
  loseCounter += 1;
  localStorage.setItem('crystalQ',  JSON.stringify({ win: winCounter , lose : loseCounter}))
  $("#lose").html(loseCounter);
  
}

function reset() {
  let newTargetScore = getRandom(40);
  $("#target").html(newTargetScore);
  scoreCounter = 0;
  $("#score").html(0);
}

