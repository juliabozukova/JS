var posX = 0;
var posY = 0;
var step = 5;
var redBox = document.getElementById("myAnimation");
var gameBox = document.getElementById("myContainer");
var autoMovingBox = document.getElementById("myAutoMovingBox");

// Automated move on a given time interval (100ms in this case)

var t = setInterval(simpleMove, 1000);

function simpleMove(){
  if ((posX < 1000) && (posY < 1000)) {
   autoMovingBox.style.left = posX + "px";
   autoMovingBox.style.top = posY + "px";
  }
  // else clearInterval(t);
  posX = Math.floor((Math.random() * 500) + 1);
  posY = Math.floor((Math.random() * 500) + 1);
}


//Handle arrow key pressed to perform a move
/*  arrow keys are only triggered by onkeydown, not onkeypress
    keycodes are: left = 37, up = 38, right = 39, down = 40
*/

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        upArrowPressed();
    }
    else if (e.keyCode == '40') {
        // down arrow
        downArrowPressed();
    }
    else if (e.keyCode == '37') {
       // left arrow
       leftArrowPressed();
    }
    else if (e.keyCode == '39') {
       // right arrow
       rightArrowPressed();
    }

}

function upArrowPressed(){
  var style = window.getComputedStyle(redBox);
  var top = style.getPropertyValue('top');
  var currentPosInt = parseInt(top, 10);
  redBox.style.top = Math.max(0, currentPosInt - step) + "px";
}

function downArrowPressed(){
  var style = window.getComputedStyle(redBox);
  var top = style.getPropertyValue('top');
  var currentPosInt = parseInt(top, 10);
  var heightBox = parseInt(window.getComputedStyle(redBox).getPropertyValue('height'), 10);
  var heightContainer = parseInt(window.getComputedStyle(gameBox).getPropertyValue('height'), 10);
  redBox.style.top = Math.min(currentPosInt + step, (heightContainer - heightBox)) + "px";
}

function leftArrowPressed(){
  var style = window.getComputedStyle(redBox);
  var left = style.getPropertyValue('left');
  var currentPosInt = parseInt(left, 10);
  redBox.style.left = Math.max(0, currentPosInt - step) + "px";
}

function rightArrowPressed(){
  var style = window.getComputedStyle(redBox);
  var left = style.getPropertyValue('left');
  var currentPosInt = parseInt(left, 10);
  var heightBox = parseInt(window.getComputedStyle(redBox).getPropertyValue('height'), 10);
  var heightContainer = parseInt(window.getComputedStyle(gameBox).getPropertyValue('height'), 10);
  redBox.style.left = Math.min(currentPosInt + step, (heightContainer - heightBox)) + "px";
}

