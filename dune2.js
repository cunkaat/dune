let circleY = 880;

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
  text('SHE SAID', 930, 200);
  
// MAIN TEXT

  textSize(130);
  textFont('Times New Roman');
  if (mouseX > 350 && mouseX < 1400 && mouseY > 250 && mouseY < 400) {
    fill('orange');
  } else {
    fill('black');
  }
  textFont('Helvetica');
  text('The mystery of life', 500, 450);
  
  if (mouseX > 220 && mouseX < 1600 && mouseY > 500 && mouseY < 630) {
    fill('orange');
  } else {
    fill('black');
  }
  text('is not a problem to solve,', 330, 650);
  

  // PLANETS 

  if (mouseY >= 350) { 
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

function mousePressed() {
  // Check if the mouse is within the area of the ellipses
  if (mouseX > width/2 - 40 && mouseX < width/2 + 60 && mouseY > circleY - 40 && mouseY < circleY + 40) {
    // Open the URL in a new tab
    window.open("https://cunkaat.github.io/dune/dune3a.html", "_blank");
  }
}
