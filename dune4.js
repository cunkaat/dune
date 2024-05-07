function setup() {
  createCanvas(windowWidth, windowHeight);
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
  
  brighter();
}

function brighter() {
  let circleHover = false;
  // Calculate the distance between mouse position and circle center
  let d = dist(mouseX, mouseY, width / 2, (height / 2) + 70);
  // Check if the distance is less than or equal to the radius
  if (d <= 350) {
    circleHover = true;
  }
  
  fill(circleHover ? '#FFD19B' : '#F4E4D1');
  noStroke();
  ellipse(width/2, (height/2)+70, 700, 700);
  fill(circleHover ? '#F2C48E' : '#E8D8C4');
  ellipse(width/2, (height/2)+70, 550, 550);
  fill(circleHover ? '#DDAA6F' : '#D6C6B4');
  ellipse(width/2, (height/2)+70, 400, 400);
  
  if (mouseX > (width/2)-350 && mouseX < (width/2)+350 && mouseY > (height/2) && mouseY < (height/2)+350) {
    fill('black');
    textSize(35);
    textFont('Helvetica');
    text('A PROCESS', 1015, 560);
    text('CANNOT BE', 1015, 600);
    text('UNDERSTOOD', 995, 640);
    textSize(35);
    textFont('HELVETICA');
    fill('white');
    text('BY', 1090, 720);  
  } else {  
    fill('white');
    textSize(35);
    textFont('Helvetica');
    text('A PROCESS', 1015, 560);
    text('CANNOT BE', 1015, 600);
    text('UNDERSTOOD', 995, 640);
  }
  
  if (mouseX > 990 && mouseX < 1300 && mouseY > 400 && mouseY < 700) {
    fill('white');
    textSize(35);
    textFont('Helvetica');
    text('A PROCESS', 1015, 560);
    text('CANNOT BE', 1015, 600);
    text('UNDERSTOOD', 995, 640);
    textSize(35);
    textFont('HELVETICA');
    fill('black');
    text('BY', 1090, 720);  
  }
}

function mouseClicked() {
  // Open the specified URL in a new tab when "A PROCESS CANNOT BE UNDERSTOOD BY" is clicked
  if (mouseX > 990 && mouseX < 1300 && mouseY > 400 && mouseY < 700) {
    window.open("https://cunkaat.github.io/dune/dune5.html", "_blank");
  }
}
