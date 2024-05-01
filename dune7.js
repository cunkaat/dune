function setup() {
    createCanvas(400, 400);
    frameRate(10);
  }
  
  function draw() {
    noStroke();
    background('white');
    textSize(60);
    textFont('Helvetica');
    textStyle(BOLD);
    fill('black');
    text('THAT', 115, 120);
    text('SEEMED', 65, 180);
    text('TO SATISFY', 20, 240);
    text('HER.', 120, 300);
    
    if (mouseX > 200, mouseY > 200) {
    background('black'); 
    fill('white');
    text('THAT', 115, 120);
    text('SEEMED', 65, 180);
    text('TO SATISFY', 20, 240);
    text('HER.', 120, 300);
      
    if (mouseX > 200, mouseY > 300) { 
    fill('#8F2412');
    stroke('white');
    strokeWeight(3);
    ellipse(width/2-25, 370, 20, 20);
      
    fill('#E3A127');
    stroke('white');
    strokeWeight(3);
    ellipse(width/2, 350, 50, 50);
    
    fill('#CF6D2B');
    strokeWeight(3);
    ellipse(width/2+25, 335, 20, 20);
      
    //when click, next page
      
      
   }
      
    
    }
  }