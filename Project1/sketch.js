function setup() {
  let canvas = createCanvas(700, 500);
  canvas.parent('sketch-holder');
  background(125, 0, 125, 40);
}

function draw() {
  fill(255, 0, 0);
  //ellipse(windowWidth/2, windowHeight/2, 50, 50);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  if (key === 's') {
    //img.save('img', 'jpg');
  saveCanvas(canvas, 'myCanvas', 'jpg');
  }
}

function keyTyped() {
  if (key === 'z') {
    clear(draw);
  }
}
