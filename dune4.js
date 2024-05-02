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
  text('SO I QUOTED THE FIRST LAW OF MENTAT TO HER:', 460, 120);
  
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
  
  if (mouseX > 780 && mouseX < 1000 && mouseY > 480 && mouseY < 600) {
    textSize(35);
    textFont('Helvetica');
    fill('black');
    text('A PROCESS', 800, 490);
    text('CANNOT BE', 800, 530);
    text('UNDERSTOOD', 780, 570);
    textSize(35);
    textFont('HELVETICA');
    fill('white');
    text('BY', 870, 640);  
  } else {  
    textSize(35);
    textFont('Helvetica');
    fill('white');
    text('A PROCESS', 800, 490);
    text('CANNOT BE', 800, 530);
    text('UNDERSTOOD', 780, 570);
  }
  
  if (mouseX > 780 && mouseX < 1000 && mouseY > 600 && mouseY < 800) {
    textSize(35);
    textFont('Helvetica');
    fill('white');
    text('A PROCESS', 800, 490);
    text('CANNOT BE', 800, 530);
    text('UNDERSTOOD', 780, 570);
    textSize(35);
    textFont('HELVETICA');
    fill('black');
    text('BY', 870, 640);  
  }
}
