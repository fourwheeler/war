


var firstPlayer = [];
var secondPlayer = [];
var playedCards = [];
var cards = [];
var $draw = $("#draw");
var $firstPlayer = $("#firstPlayer");
var $secondPlayer = $("#secondPlayer");
var $firstPlayerNumber = $("#firstPlayerNumber");
var $secondPlayerNumber = $("#secondPlayerNumber");
var $firstPlayerSuit = $("#firstPlayerSuit");
var $secondPlayerSuit = $("#secondPlayerSuit");
var $winner = $("#winner");
var $player1Count = $("#player1Count");
var $player2Count = $("#player2Count");
var number1;
var number2;
var suit1;
var suit2;

for (i=1; i<14; i++){
  for (k=1; k<5; k++) {
    var j = [i,k];
    cards.push(j);
  }
}

cards.shuffle = function() {
  console.log("shuffle");
  var input = this;
  for (var i = cards.length-1; i >=0; i--) {
    var randomIndex = Math.floor(Math.random()*(i+1));
    var itemAtIndex = cards[randomIndex][0];
    var itemAtSecond = cards[randomIndex][1];
    input[randomIndex][0] = input[i][0];
    input[randomIndex][1] = input[i][1];
    input[i][0] = itemAtIndex;
    input[i][1] = itemAtSecond;
  }
  return input;
}
//end of shuffle function
 cards.shuffle();

var half = cards.length/2;
for (i=0; i<half; i++) {
  firstplayer.push(cards[i]);
}

cards.splice(0, half);

secondPlayer = cards;

$player1Count.html(firstPlayer.length);
$player2Count.html(secondPlayer.length);

function endGame(){
  if(firstPlayer.length == 0){
    $winner.html("GAME OVER </br> Player One Wins </br> Player Two has no more cards to play.");
  }
if(secondPlayer.length == 0){
  $winner.html("GAME OVER </br> Player One Wins </br> Player Two has no mor cards to play.");
}
   $winner.css("color", "black");
   $winner.css("font-weight", "bold");
   $("#end").css("display", "none");
   $firstPlayerNumber.html("");
   $secondPlayerNumber.html("");
   $draw.off();
 }

 function assign(){

   $firstPlayer.css("border-color", "black");
   $secondPlayer.css("border-color", "black");

   if(firstPlayer.length == 0 || secondPlayer.length == 0){
     endgame();
   }
 }

  $draw.on('click', function() {
    assign();
  })

  console.log("assign");
