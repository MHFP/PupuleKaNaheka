function Game(){
  this.grid = [];
}

function Snake(){
  Game.call(this);
  this.position = [];
  this.body = [];
  this.orientation = 0;
}

Snake.prototype = Object.create(Game.prototype);
Snake.prototype.constructor = Snake;

Game.prototype.getGrid = function(){
  return getGrid();
};

var game = new Game();
var snake = new Snake();


var gameGrid = "";
function getGrid(){
  var row = [];
  for(x=0; x<10; x++){
    var col = [];
    for(y=0; y<10; y++){
      col.push(null);
      gameGrid += '<div class="cell" row="' + x + '" column="' + y + '">';
      gameGrid += '</div>';
    }
    row.push(col);
  }
  snake.grid = row;
  document.getElementById('gameGrid').innerHTML = gameGrid;
  return row;
}


function randomPosition(){
  var positionX = Math.floor(Math.random() * snake.grid.length);
  var positionY = Math.floor(Math.random() * snake.grid[0].length);
  var position = [];
  position.push(positionX);
  position.push(positionY);
  snake.currentPosition = position;
  snake.grid[position[0]][position[1]] = 1;
  return position;
}
