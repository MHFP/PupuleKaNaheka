// ================ //
// GAME CONSTRUCTOR //
// ================ //
function Game(rows, columns, numberOfSnakes){
  this.grid = [];
  this.rows = rows;
  this.columns = columns;
  this.numberOfSnakes = numberOfSnakes;
  this.snakes = [];
  this.speed = 100;

  this.generateGrid();
  this.generateSnakes();
  this.start();
  this.draw();
}



Game.prototype.draw = function(){
  var position = this.grid[this.snakes[0].head.row][this.snakes[0].head.column];
  if (position === 1) {
    var selector = '[row=' + this.snakes[0].head.row + '][column=' + this.snakes[0].head.column + ']';
    $(selector).addClass("snake0");
  }
};


Game.prototype.start = function(){
  if(!this.intervalId) {
    this.intervalId = setInterval(this.update.bind(this), this.speed);
  }
};


Game.prototype.update = function(){
  console.log(this.snakes[0].head);
  this.snakes[0].moveForward(this.rows, this.columns);

  this.grid[this.snakes[0].head.row][this.snakes[0].head.column] = 1;

  if (this.snakes[0].hasEatenItself()){
    if(this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
    alert('Game Over');
  }
  console.log(this.snakes[0].body);
  this.draw();
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



// ================= //
// SNAKE CONSTRUCTOR //
// ================= //
function Snake() {
  this.direction = 'right';
  this.body = [
    {row: 0, column: 0}
  ];
  this.head ={row: 0, column: 0};
}



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
  this.head = head;
};


Snake.prototype.hasEatenItself = function(){
  var headRow = this.head.row;
  var headCol = this.head.column;
  var selector = '[row=' + headRow + '][column=' + headCol + ']';
  if ($(selector).hasClass("snake0")){
    return true;
  }
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
