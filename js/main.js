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
    $(".instructions").removeClass()
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

var canvas,
	context,
	width,
	height,
	x = 0,
	y= 0,
	angle = 0;

function draw() {
	var radius = 200;
	context.clearRect(0, 0, width, height);
	context.save();
	context.translate(width / 2, height / 2);
	context.rotate(angle / Math.PI);
	for (var i = 1; i < 20; i++) {
		x = Math.sin(i / 2) * 20;
		context.beginPath();
		if (i % 2 !== 0) {
		context.fillStyle = "#000";
		context.arc(x, y, radius - (i * 10), 0, 2 * Math.PI, false);
		context.fill();
		}
		else {
		context.fillStyle = "#fff";
		context.arc(x, y, radius - (i * 10), 0, 2 * Math.PI, false);
		context.fill();
		}
	}
	context.restore();
	angle += 0.5;
}

window.onload = function () {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
	window.setInterval(draw, 50);
};
