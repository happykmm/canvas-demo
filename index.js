$(document).ready(function(){
var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;
var textX = 50;
var textY = 50;
var FPS = 30;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');


setInterval(function() {
  draw();
}, 1000/FPS);

function draw() {
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();
}

function update() {

}

var player = {
  color: "#00A",
  x: 220,
  y: 270,
  width: 32,
  height: 32,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};

 $(document).keydown(function(event){
      console.log(event);
      switch(event.keyCode) {
        case 38://"Up":
          player.y -= 5;
          break;
        case 40://"Down":
          player.y += 5;
          break;
        case 37://"Left":
          player.x -= 5;
          break;
        case 39://"Right":
          player.x += 5;
          break;
      }
  });

});
