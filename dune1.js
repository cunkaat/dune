let circleY = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  noStroke();
  background('white');
  textSize(130);
  textFont('Helvetica');
  textStyle(BOLD);
  fill('black');
  text('I THINK', 890, height/3+40);
  text('SHE GOT', 830, 550);
  text('MAD.', 970, 700);
  
  if (mouseX > 200 && mouseY > 200) {
    background('black'); 
    fill('white');
    text('I THINK', 890, height/3+40);
    text('SHE GOT', 830, 550);
    text('MAD.', 970, 700);
    
    if (mouseX > 200 && mouseY > 300) { 
      fill('#8F2412');
      stroke('white');
      strokeWeight(3);
      ellipse(width/2-35, circleY+30, 20, 20);
    
      fill('#E3A127');
      stroke('white');
      strokeWeight(3);
      ellipse(width/2, circleY, 80, 80);
  
      fill('#CF6D2B');
      strokeWeight(3);
      ellipse(width/2+37, circleY-25, 20, 20);
    }
  }
}

function mousePressed() {
  // Check if the mouse is within the area of the ellipses
  if (mouseX > width/2 - 40 && mouseX < width/2 + 60 && mouseY > circleY - 40 && mouseY < circleY + 40) {
    // Open the URL in a new tab
    window.open("https://cunkaat.github.io/dune/dune2.html", "_blank");
  }
}
