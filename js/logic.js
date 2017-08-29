// GAME CONSTRUCTOR //
// ================ //
function Game(rows, columns, numberOfSnakes){
  this.grid = [];
  this.rows = rows;
  this.columns = columns;
  this.numberOfSnakes = numberOfSnakes;
  this.snakes = [];

  this.generateGrid();
  this.generateSnakes();
}

Game.prototype.generateGrid = function(){
  var htmlGrid = "";
  var rows = [];
  for(x=0; x < this.rows; x++){
    var cols = [];
    for(y=0; y < this.columns; y++){
      cols.push(null);
      htmlGrid += '<div class="cell" row="' + x + '" column="' + y + '">';
      htmlGrid += '</div>';
    }
    rows.push(cols);
  }
  this.grid = rows;
  document.getElementById('gameGrid').innerHTML = htmlGrid;
  return rows;
};


Game.prototype.generateSnakes = function() {
  for(var i=0; i < this.numberOfSnakes; i++) {
    this.snakes.push(new Snake());
  }
};

Game.prototype.drawSnake = function() {
  this.snakes[0].body.forEach( function(position, index) {
    var selector = '[row=' + position.row + '][col=' + position.column + ']';
    $(selector).addClass('snake');
  });
};

// SNAKE CONSTRUCTOR //
// ================= //
function Snake() {
  this.headPosition = [];
  this.orientation = 0;
  this.body = [];

}

Snake.prototype.body = function(){
  for(var i=0; i<game.snakes.length; i++){
    games.snakes[i].body = [
      {}
    ];
  }
};

Snake.prototype.goLeft = function(){
console.log("I'm going left");
};

Snake.prototype.goRight = function(){
  console.log("I'm going right");
};

Snake.prototype.goForward = function(){
  console.log("I'm going forward");
};
