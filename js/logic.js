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
  for(i=0; i < this.snakes.length; i++){
    this.snakes[i].body.forEach(function(position, index, array) {
      var selector = '[row=' + position.row + '][column=' + position.column + ']';
      $(selector).addClass('snake' + [i]);
    });
  }
};

Game.prototype.start = function(){
  setInterval(this.update.bind(this), 100);
};


Game.prototype.update = function(){
  this.snakes[0].moveForward(this.rows, this.columns);

  if (this.snakes[0].hasEatenItself()){
    alert('Game Over');
  //  $(this).stop(stopAll);
  }

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
    var row = 0; var col = 0;
    row = Math.floor(Math.random() * this.grid.length);
    col = Math.floor(Math.random() * this.grid.length);
    this.snakes[i].body[0].row = row;
    this.snakes[i].body[0].column = col;
  }
};




// SNAKE CONSTRUCTOR //
// ================= //
function Snake() {
  this.direction = 'right';
  this.body = [
    {row: 0, column: 0}
  ];
}

Snake.prototype.initialPosition = function(){
  var row = 0; var col = 0;
  row = Math.floor(Math.random() * game.grid.length);
  col = Math.floor(Math.random() * game.grid.length);
  this.body[0].row = row; this.body[0].column = col;
};

Snake.prototype.hasEatenItself = function(){
  return this.body.some(function (element, index, array) {
    return (element.row === array[0].row && element.column === array[0].column && index != 0);
  });
};

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
