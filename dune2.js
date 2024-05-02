let circleY = 750;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  background('lightgrey'); 
  textSize(70);
  textFont('Helvetica');
  textStyle(BOLD);
  fill('black');
  text('SHE SAID', 720, 200);
  
// MAIN TEXT

  textSize(130);
  textFont('Times New Roman');
  if (mouseX > 350 && mouseX < 1400 && mouseY > 250 && mouseY < 400) {
    fill('orange');
  } else {
    fill('black');
  }
  text('The mystery of life', 350, 400);
  
  if (mouseX > 220 && mouseX < 1600 && mouseY > 500 && mouseY < 630) {
    fill('orange');
  } else {
    fill('black');
  }
  text('is not a problem to solve,', 220, 600);
  

  // PLANETS 

    if (mouseX > 200, mouseY > 630) { 
  fill('#8F2412');
  stroke('black');
  strokeWeight(3);
  ellipse(width/2-35, circleY+30, 20, 20);
    
  fill('#E3A127');
  strokeWeight(3);
  ellipse(width/2, circleY, 80, 80);
  
  fill('#CF6D2B');
  strokeWeight(3);
  ellipse(width/2+37, circleY-25, 20, 20); }
}
