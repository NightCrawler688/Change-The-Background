
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var red, blue, green;

function setup(){
  createCanvas(1200,400);
  
//  var red = createCanvas(200,200,10,10);
  //var green = createCanvas(800,400,50,90);
 // var blue = createCanvas(400,100,70,100);


}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  // red.x = World.mouse.x
  // // change the value of Green based on the mouse movement about the X axis
  // green.x = World.mouse.x
  // // change the value of Blue based on the mouse movement about the X axis
  // blue.x = World.mouse.x

  // Use the map() function to do so. 
//  let x1 = map(mouseX, 0, width, 25, 75);
//   let x2 = map(mouseX, 0, width, 0, 100, true);
  

  // Pass the values to the background() function you have learnt previously.
background(r,g,b);
r = map(mouseX,0,width,0,255);
b = map(mouseX,0,width,0,85);
g = map(mouseX,0,width,0,135);
  // Create an ellipse that will move around with you mouse about the X axis.
  // ellipse(x1, 25, 25, 25);
  // ellipse(x2, 75, 25, 25);
  fill("blue");
  ellipse(mouseX,mouseY,25,50);
  // // Remember to fill the canvas with white paint before creating the ellipse.

  drawSprites();
}