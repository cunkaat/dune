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
    text('THAT', 930, 230);
    text('SEEMED', 830, 380);
    text('TO SATISFY', 730, 530);
    text('HER.', 970, 680);
    
    if (mouseX > 200, mouseY > 200) {
    background('black'); 
    fill('white');
    text('THAT', 930, 230);
    text('SEEMED', 830, 380);
    text('TO SATISFY', 730, 530);
    text('HER.', 970, 680);
      
    if (mouseX > 200, mouseY > 300) { 
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
      
    //when click, next page
      
      
   }
      
    
    }
  }