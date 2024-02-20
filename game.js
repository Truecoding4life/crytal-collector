let star1Value;
let star2Value;
let star3Value;
let star4Value;
let scoreCounter = 0;

$('#start').on('click', ()=>{
    console.log('Clicked')
   $('#WelcomeMode').hide()
   $('#GameMode').removeAttr("hidden")
});

const getRandom = (num)=> {
    return Math.floor(Math.random()*num)
};

$('#star1').html( star1Value || '???');
$('#star2').html( star2Value || '???');
$('#star3').html( star3Value || '???');
$('#star4').html( star4Value || '???');

$(document).ready(function(){
    const getTargetScore = getRandom(40);
    $('#target').html(getTargetScore)
    
});


$('.card').on('click', function (){
    const cardScore = $(this).find('.card-score');
    const getScore = getRandom(20)
    cardScore.html(getScore);
    scoreCounter+=getScore;
    $('#score').html(scoreCounter);

});