function setup() {
    createCanvas(400, 400);
    // link = createA('github_linkgoeshere', 'link title');
  }
  
  function draw() {
    background('#FFF1E0');
    textSize(12);
    textFont('Helvetica');
    textStyle(BOLD);
    fill('black');
    text('SO I QUOTED THE FIRST LAW OF MENTAT TO HER:', 50, 50);
    
    fill('#F4E4D1');
    noStroke();
    ellipse(width/2, 220, 300, 300);
    fill('#E8D8C4');
    ellipse(width/2, 220, 250, 250);
    fill('#D6C6B4');
    ellipse(width/2, 220, 200, 200);
    
    if (mouseOverCircle()) {
      brighter();
    }
  }
  
  function mousePressed() {
    if (mouseX > 140 && mouseX < 260 && mouseY > 200 && mouseY < 310) {
      
    }
  }
  
  function mouseOverCircle() {
    // Calculate the distance between mouse position and circle center
    let d = dist(mouseX, mouseY, width/2, 220);
    // Check if the distance is less than or equal to the radius
    return (d <= 150); // 150 is the radius of the largest circle
  }
  
  function brighter() {
    fill('#FFD19B');
    noStroke();
    ellipse(width/2, 220, 300, 300);
    fill('#F2C48E');
    ellipse(width/2, 220, 250, 250);
    fill('#DDAA6F');
    ellipse(width/2, 220, 200, 200);
    
    if (mouseX > 140 && mouseX < 260 && mouseY > 200 && mouseY < 310) {
      textSize(20);
      textFont('Helvetica');
      fill('black');
      text('A PROCESS', 140, 200);
      text('CANNOT BE', 140, 220);
      text('UNDERSTOOD', 128, 240);
      textSize(20);
      textFont('HELVETICA');
      fill('white');
      text('BY', 180, 280);  
    } else {  
      textSize(20);
      textFont('Helvetica');
      fill('white');
      text('A PROCESS', 140, 200);
      text('CANNOT BE', 140, 220);
      text('UNDERSTOOD', 128, 240);
    }
    
    if (mouseX > 180 && mouseX < 260 && mouseY > 270 && mouseY < 310) {
      textSize(20);
      textFont('Helvetica');
      fill('white');
      text('A PROCESS', 140, 200);
      text('CANNOT BE', 140, 220);
      text('UNDERSTOOD', 128, 240);
      textSize(20);
      textFont('HELVETICA');
      fill('black');
      text('BY', 180, 280);  
    }
  }
  