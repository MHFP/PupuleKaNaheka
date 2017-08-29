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
  this.drawSnake();
}

Game.prototype.drawSnake = function() {
  this.snakes[0].body.forEach(function(position, index, array) {
    var selector = '[row=' + position.row + '][column=' + position.column + ']';
    $(selector).addClass('snake');
  });
};

Game.prototype.start = function(){
  setInterval(this.update.bind(this), 100);
};


Game.prototype.update = function(){
  this.snakes[0].moveForward(this.rows, this.columns);
  this.drawSnake();
};

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




// SNAKE CONSTRUCTOR //
// ================= //
function Snake() {
  this.headPosition = [];
  this.direction = 'right';
  this.orientation = 0;
  this.body = [
    {row: 6, column: 6},
    {row: 7, column: 6},
  ];
}

Snake.prototype.goLeft = function(){
console.log("I'm going left");
if (this.direction === 'up' || this.direction === 'down'){
    this.direction = 'left';
  }
};

Snake.prototype.goRight = function(){
  console.log("I'm going right");
  if (this.direction === 'up' || this.direction === 'down'){
    this.direction = 'right';
  }
};

Snake.prototype.goUp = function(){
  console.log("I'm going up");
  if (this.direction === 'left' || this.direction === 'right'){
    this.direction = 'up';
  }
};

Snake.prototype.goDown = function() {
  console.log("I'm going down");
  if (this.direction === 'left' || this.direction === 'right'){
    this.direction = 'down';
  }
};

Snake.prototype.moveForward = function(maxRows, maxColumns) {
  var head = this.body[0];

  switch(this.direction){
    case 'up':
      this.body.unshift({
        row: (head.row - 1 + maxRows ) % maxRows,
        column: head.column
      });
      break;
    case 'down':
      this.body.unshift({
        row: (head.row + 1) % maxRows,
        column: head.column
      });
      break;
    case 'left':
      this.body.unshift({
        row: head.row,
        column: (head.column - 1 + maxColumns) % maxColumns
      });
      break;
    case 'right':
      this.body.unshift({
        row: head.row,
        column: (head.column + 1) % maxColumns
      });
      break;
  }
};
