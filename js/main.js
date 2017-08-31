// DOM CONTENT LOADED //
// ================== //

var game;
$(document).ready(function () {
  game = new Game(45, 50, 2);
  setupControlPlayer1();
  setupControlPlayer2();
  startGame();
  console.log(game);
});

function startGame() {
  $(".startButton").on('click', firstClick);
  function firstClick(){
    alert("Ready? Press 'Enter' to go!");
    $(".startButton").off('click').on('click', secondClick);
    game.start();
    $(".startButton").toggleClass("resetButton");
    $(".startButton").html("Reset");
  }
  function secondClick(){
    $(".startButton").off('click').on('click', firstClick);
    location.reload();
  }
}


//Assign keys for directions for player1/snake[0]
var ARROW_LEFT = 37;
var ARROW_RIGHT = 39;
var ARROW_DOWN = 40;
var ARROW_UP = 38;


function setupControlPlayer1() {
  $(document).on('keyup',function(event){

    switch (event.keyCode) {
      case ARROW_LEFT:
        game.snakes[0].goLeft();
        break;
        case ARROW_RIGHT:
        game.snakes[0].goRight();
        break;
        case ARROW_DOWN:
        game.snakes[0].goDown();
        break;
        case ARROW_UP:
        game.snakes[0].goUp();
        break;
    }
  });
}


//Assign keys for directions for player2/snake[1]
var W_UP = 87;
var D_RIGHT = 68;
var S_DOWN = 83;
var A_LEFT = 65;

function setupControlPlayer2() {
  $(document).on('keyup',function(event){

    switch (event.keyCode) {
      case A_LEFT:
        game.snakes[1].goLeft();
        break;
        case D_RIGHT:
        game.snakes[1].goRight();
        break;
        case S_DOWN:
        game.snakes[1].goDown();
        break;
        case W_UP:
        game.snakes[1].goUp();
        break;
    }
  });
}
