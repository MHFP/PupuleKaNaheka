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
  }});
}

// //Assign keys for directions of snake[0]
// var Q = 81;
// var E = 69;
//
// function setupControlPlayer1() {
//   $(document).on('keyup',function(event){
//
//     switch (event.keyCode) {
//       case Q:
//         game.snakes[0].goLeft();
//         break;
//         case E:
//         game.snakes[0].goRight();
//         break;
//   }});
// }




// DOM CONTENT LOADED //
// ================== //

var game;
$(document).ready(function () {
  game = new Game(45, 50, 2);
  setupControlPlayer1();
  //setupControlPlayer2();

  console.log(game);
});
