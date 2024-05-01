let circleX = 200;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  noStroke();
  background('white');
  textSize(70);
  textFont('Helvetica');
  textStyle(BOLD);
  fill('black');
  text('I THINK', 80, height/3);
  text('SHE GOT', 50, height/2);
  text('MAD.', 120, 265);
  
  if (mouseX > 200, mouseY > 200) {
  background('black'); 
  fill('white');
  text('I THINK', 80, height/3);
  text('SHE GOT', 50, height/2);
  text('MAD.', 120, 265);
    
  if (mouseX > 200, mouseY > 300) { 
  fill('#8F2412');
  stroke('white');
  strokeWeight(3);
  ellipse(circleX-36, 360, 20, 20);
    
  fill('#E3A127');
  stroke('white');
  strokeWeight(3);
  ellipse(circleX, 330, 80, 80);
  
  fill('#CF6D2B');
  strokeWeight(3);
  ellipse(circleX+40, 310, 20, 20);
    
  //when click, next page
    
    
 }
    
  
  }
}