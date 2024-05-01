let circleX = 300;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  noStroke();
  background('lightgrey'); 
  textSize(25);
  textFont('Helvetica');
  textStyle(BOLD);
  fill('black');
  text('SHE SAID', 240, 100);
  
  textSize(35);
  textFont('Times New Roman');
  if (mouseX > 110 && mouseX < 420 && mouseY > 190 && mouseY < 230) {
    fill('orange');
  } else {
    fill('black');
  }
  text('The mystery of life', 150, 190);
  
  if (mouseX > 110 && mouseX < 420 && mouseY > 230 && mouseY < 270) {
    fill('orange');
  } else {
    fill('black');
  }
  text('is not a problem to solve,', 110, 230);
  
    if (mouseX > 200, mouseY > 300) { 
  fill('#8F2412');
  stroke('black');
  strokeWeight(3);
  ellipse(circleX-36, 360, 20, 20);
    
  fill('#E3A127');
  strokeWeight(3);
  ellipse(circleX, 330, 80, 80);
  
  fill('#CF6D2B');
  strokeWeight(3);
  ellipse(circleX+40, 310, 20, 20); }
}
