// ================ //
// GAME CONSTRUCTOR //
// ================ //
function Game(rows, columns, numberOfSnakes){
  this.grid = [];
  this.rows = rows;
  this.columns = columns;
  this.numberOfSnakes = numberOfSnakes;
  this.snakes = [];
  this.speed = 70;

  this.generateGrid();
  this.generateSnakes();
  this.draw();
  this.counter = 0;
}


Game.prototype.update = function(){

  for (var i = 0; i < this.snakes.length; i++) {
    this.snakes[i].moveForward(this.rows, this.columns);

    this.grid[this.snakes[i].head.row][this.snakes[i].head.column] = i;

    if (this.snakes[i].hasEatenItself(i)){
      if(this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
      }
      alert('🐍 Player ' + (i+1) + ", you lost, because you ate yourself 🤣");
    }
    if (this.counter%9 === 0) {
      this.grid[this.snakes[i].head.row][this.snakes[i].head.column] = null;
    }

  }
  if (this.snakes[0].collision1()){
    alert('Player ' + 2 + ", you won!");
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
  if (this.snakes[1].collision2()){
    alert('Player ' + 1 + ", you won!");
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }


  this.draw();
  this.counter ++;
};



Game.prototype.draw = function(){
  for (var i = 0; i < this.snakes.length; i++) {
    var position = this.grid[this.snakes[i].head.row][this.snakes[i].head.column];
    if (position === i) {
      var selector = '[row=' + this.snakes[i].head.row + '][column=' + this.snakes[i].head.column + ']';
      $(selector).addClass("snake" + i);
    }

  }
};


Game.prototype.start = function(){
  if(!this.intervalId) {
    this.intervalId = setInterval(this.update.bind(this), this.speed);
  }
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

  this.hasEatenItself();
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

Snake.prototype.collision1 = function(){
  var headRow = this.head.row;
  var headCol = this.head.column;
  var selector = '[row=' + headRow + '][column=' + headCol + ']';
  if ($(selector).hasClass("snake" + 1)){
    return true;
  }
};

Snake.prototype.collision2 = function(){
  var headRow = this.head.row;
  var headCol = this.head.column;
  var selector = '[row=' + headRow + '][column=' + headCol + ']';
  if ($(selector).hasClass("snake" + 0)){
    return true;
  }
};


Snake.prototype.hasEatenItself = function(i){
  var headRow = this.head.row;
  var headCol = this.head.column;
  var selector = '[row=' + headRow + '][column=' + headCol + ']';
  if ($(selector).hasClass("snake" + i)){
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
