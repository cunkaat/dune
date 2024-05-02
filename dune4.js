function setup() {
  createCanvas(windowWidth, windowHeight);
  // link = createA('github_linkgoeshere', 'link title');
}

function draw() {
  background('#FFF1E0');
  textSize(35);
  textFont('Helvetica');
  textStyle(BOLD);
  fill('black');
  text('SO I QUOTED THE FIRST LAW OF MENTAT TO HER:', 680, 170);
  
  fill('#F4E4D1');
  noStroke();
  ellipse(width/2, (height/2)+70, 700, 700);
  fill('#E8D8C4');
  ellipse(width/2, (height/2)+70, 550, 550);
  fill('#D6C6B4');
  ellipse(width/2, (height/2)+70, 400, 400);
  
  if (mouseOverCircle()) {
    brighter();
  }
}


function mouseOverCircle() {
  // Calculate the distance between mouse position and circle center
  let d = dist(mouseX, mouseY, width / 2, (height / 2) + 70);
  // Check if the distance is less than or equal to the radius
  return (d <= 350); // Half of the width/height of the ellipse
}


function brighter() {
  fill('#FFD19B');
  noStroke();
  ellipse(width/2, (height/2)+70, 700, 700);
  fill('#F2C48E');
  ellipse(width/2, (height/2)+70, 550, 550);
  fill('#DDAA6F');
  ellipse(width/2, (height/2)+70, 400, 400);
  
  if (mouseX > (width/2)-350 && mouseX < (width/2)+350 && mouseY > (height/2) && mouseY < (height/2)+350) {
    textSize(35);
    textFont('Helvetica');
    fill('black');
    text('A PROCESS', 1010, 580);
    text('CANNOT BE', 1010, 620);
    text('UNDERSTOOD', 990, 660);
    textSize(35);
    textFont('HELVETICA');
    fill('white');
    text('BY', 1090, 750);  
  } else {  
    textSize(35);
    textFont('Helvetica');
    fill('white');
    text('A PROCESS', 1010, 580);
    text('CANNOT BE', 1010, 620);
    text('UNDERSTOOD', 990, 660);
  }
  
  if (mouseX > 990 && mouseX < 1300 && mouseY > 400 && mouseY < 700) {
    textSize(35);
    textFont('Helvetica');
    fill('white');
    text('A PROCESS', 1010, 580);
    text('CANNOT BE', 1010, 620);
    text('UNDERSTOOD', 990, 660);
    textSize(35);
    textFont('HELVETICA');
    fill('black');
    text('BY', 1090, 750);  
  }
}
