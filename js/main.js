//Assign keys for directions of snake[0]
var Q = 81;
var E = 69;

function setupControlPlayer1() {
  $(document).on('keyup',function(event){

    switch (event.keyCode) {
      case Q:
        game.snakes[0].goLeft();
        break;
        case E:
        game.snakes[0].goRight();
        break;
  }});
}

//Assign keys for directions of snake[1]
var ARROW_LEFT = 37;
var ARROW_RIGHT = 39;

function setupControlPlayer2() {
  $(document).on('keyup',function(event){

    switch (event.keyCode) {
      case ARROW_LEFT:
        game.snakes[1].goLeft();
        break;
        case ARROW_RIGHT:
        game.snakes[1].goRight();
        break;
  }});
}



// DOM CONTENT LOADED //
// ================== //

var game;
$(document).ready(function () {
  game = new Game(45, 50, 2);
  setupControlPlayer1();
  setupControlPlayer2();

  console.log(game);
});
