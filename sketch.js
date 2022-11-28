//The setup function only happens once
var leo=70;
var hop=30;
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  stroke(200,150,70);
  fill(255,0,0);
  triangle(240,180,leo,150,hop,160);
  leo=leo+70;
  hop=hop+90;
//circle
  stroke(0,0,0) // an RGB color for the circle's border
  fill(204,199,121); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(125,250,250,500); // center of canvas, 20px dia

stroke(0,0,0);
fill(0,0,0);
 ellipse(240,180,15,5);
 stroke(0,0,0);
fill(0,0,0);
 ellipse(235,275,30,5);
  }