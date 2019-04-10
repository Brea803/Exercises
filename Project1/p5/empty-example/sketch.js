// function setup() {
// 	createCanvas(400, 400);
// 	background(255,0,0);

// }
// to center the canvas



//*BELOW*
//multiple white squares on a red background

//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  background(255, 0, 0);
//}
//
//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}

//function draw() {
//	rect(mouseX, mouseY, 40, 40);
//}


//circle 
function draw() {
	//let canvas = createCanvas(windowWidth, windowHeight);
	//canvas.parent('sketch-holder');
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//background(0, 0, 255);
	fill(255, 0, 0);
	ellipse(50,50,80,80);
	//ellipse(windowWidth/2, WindowHeight/2);
	if(mouseIsPressed) {
		ellipse(mouseX, mouseY, 50, 50);
	}

}
