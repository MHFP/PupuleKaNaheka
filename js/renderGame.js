$(document).ready(function () {
  // snake.initialize();


  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    switch (event.key) {
      case "ArrowLeft":
        snake.moveLeft();
        console.log(snake.position);
        break;
      case "ArrowRight":
        snake.moveRight();
        console.log(snake.position);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

  // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);

  /*
  var html = "";
  var grid = snake.grid;
  grid.forEach(function(grid){

      html += '<div class= "cell">';

    });


  document.getElementById("gameGrid").innerHTML = html;
  */
});
