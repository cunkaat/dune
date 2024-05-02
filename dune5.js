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
  
  brighter();
}

// function mousePressed() {
//   if (mouseX > 140 && mouseX < 260 && mouseY > 200 && mouseY < 310) {
    
//   }
// }

function mouseOverCircle() {
  // Calculate the distance between mouse position and circle center
  let d = dist(mouseX, mouseY, width/2, 220);
  // Check if the distance is less than or equal to the radius
  return (d <= 150); // 150 is the radius of the largest circle
}

function brighter() {
  fill('#DDAA6F');
  noStroke();
  ellipse(width/2, (height/2)+70, 700, 700);
  textSize(100);
  textFont('Helvetica');
  fill('white');
  text('STOPPING', 860, 650);
  text('IT.', 1080, 780);
  
  if (mouseX > 820 && mouseX < 1400 && mouseY > 550 && mouseY < 800) {
  textSize(100);
  textFont('Helvetica');
  fill('black');
  text('STOPPING', 860, 650);
  text('IT.', 1080, 780);
    
  }
}
