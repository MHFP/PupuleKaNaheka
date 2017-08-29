//snake-object
var snake = {
    initialize: function(){
      return initializeGrid();
    },
    grid: [],
    orientation: 0,
    position: {
      row: 0,
      col: 0
    },
    moveLeft: function(){
      return moveLeft();
    },
    moveRight: function(){
      return moveRight();
    },
    counter: 0
};

//initialize game-grid
function initializeGrid(){
  if(snake.counter === 0){
    snake.grid = gridComposer();
    var position = randomPosition();
    snake.grid[position[0]][position[1]] = 1;
    snake.position.row = position[0];
    snake.position.col = position[1];
  }
  return snake.grid;
}

/*
Snake.prototype.randomPosition = function(){
  var positionX = Math.floor(Math.random() * snake.grid.length);
  var positionY = Math.floor(Math.random() * snake.grid[0].length);
  var position = [];
  position.push(positionX);
  position.push(positionY);
  snake.position = position;
  snake.grid[position[0]][position[1]] = 1;
  return position;
};
*/


//composition of grid
var gameGrid = document.getElementById("gameGrid");
function gridComposer(){
  console.log("Im running !!!!");
  var row = [];
  var col = [];
  for(y=0; y<10; y++){
    for(x=0; x<10; x++){
      col.push(null);
      gameGrid += '<div class="cell" row="' + x + '" column="' + y + '">';
    }
    row.push(col);
  }
  return row;
}

//get random coordinates x and y on grid
function randomPosition(){
  var grid = gridComposer();
  var positionX = Math.floor(Math.random() * grid.length);
  var positionY = Math.floor(Math.random() * grid[0].length);
  var position = [];
  position.push(positionX);
  position.push(positionY);
  return position;
}


//function to store moves on grid
function movement(){
  var positionX = snake.position.row;
  var positionY = snake.position.col;
  snake.grid[positionX][positionY] = 1;
  return snake.grid;
}

//functions for snake-movement
function moveForward(){
  var orientation = snake.orientation;
  if (orientation === 0) {
    snake.position.row -=1;
  } else if (orientation === 1) {
    snake.position.col +=1;
  } else if (orientation === 2) {
    snake.position.row +=1;
  } else {
    snake.position.col -=1;
  }
  snake.counter +=1;
  movement();
  return snake.position;
}

function moveRight(){
  moveForward();
  moveForward();
  right();
}

function right(){
  var orientation = snake.orientation;
  if(orientation === 0){
  snake.position.col += 1;
  } else if (orientation === 1) {
  snake.position.row += 1;
  } else if (orientation === 2) {
  snake.position.col -= 1;
  } else {
  snake.position.row -= 1;
  }
  snake.counter +=1;
  orientation = turnRight();
  movement();
  return snake.position;
}

function moveLeft(){
  moveForward();
  moveForward();
  left();
}

function left(){
  var orientation = snake.orientation;
  if(orientation === 0){
  snake.position.col -= 1;
} else if (orientation === 3) {
  snake.position.row += 1;
  } else if (orientation === 2) {
  snake.position.col += 1;
  } else {
  snake.position.row -= 1;
  }
  snake.counter +=1;
  orientation = turnLeft();
  movement();
  return snake.position;
}

// orientation of snake-head
function turnLeft(){
  var orientation = snake.orientation;
  switch(orientation){
  case 0:
  snake.orientation = 3;
  break;
  case 3:
  snake.orientation = 2;
  break;
  case 2:
  snake.orientation = 1;
  break;
  case 1:
  snake.orientation = 0;
  break;
  }
  return snake.orientation;
}

function turnRight(){
  var orientation = snake.orientation;
  switch(orientation){
  case 0:
  snake.orientation = 1;
  break;
  case 1:
  snake.orientation = 2;
  break;
  case 2:
  snake.orientation = 3;
  break;
  case 3:
  snake.orientation = 0;
  break;
  }
  return snake.orientation;
}

// //hold current grid data
// function updateGrid(){
//   var currentGrid = getPosition();
//   var position = movement();
//   currentGrid[position[0]][position[1]] = 1;
//   return currentGrid;
// }


//timeIncrementation
// var i = 5;
// var timeIncrement = setInterval(function(){
//   if (i>0 && !getDirections()){
//     moveForward();
//   } else if (i>0 && !getDirections()) {
//
//   } else {
//     console.log("done");
//     clearInterval(timeIncrement);
//   }
//   i--;
// }, 1000);
