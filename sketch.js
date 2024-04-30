var strokecolor = {
  r: 0,
  g: 0,
  b: 0
}

var hoverCircle = false; // Variable to track if mouse is over the circle


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightgrey');
  
    // Check if mouse is over the yellow ellipse
  if (!mouseIsPressed) {
    var d = dist(mouseX, mouseY, width/2, height/2);
    if (d < 37.5) { // If mouse is within 37.5 pixels from the center of the ellipse
      hoverCircle = true;
    } else {
      hoverCircle = false;
    }
  }
  
  {
    fill('grey');
    noStroke();
    textSize(40);
    textFont('Times New Roman');
    // textStyle(BOLD);
    text('BUT A REALITY', 20, 50);
    
    noFill();
    strokeWeight(3);
    stroke('white');
    ellipse(width/2, height-230, 50, 50);
    fill(hoverCircle ? 'black' : 'orange');
    noStroke();
    ellipse(width/2, height/2, 75, 75);
  
    noFill();
    strokeWeight(3);
    stroke('white');
    ellipse(width/2, height-170, 50, 50);
    if (mouseIsPressed) {
        mouseClicked();
    }

  }
  
  function mouseClicked () {
    background('orange');
    fill('yellow');
    noStroke();
    ellipse(width/2, height/2, 75, 75);
    circles();
    
    fill('grey');
    noStroke();
    textSize(40);
    textFont('Times New Roman');
    // textStyle(BOLD);
    text('BUT A REALITY', 20, 50);
    
    fill('white');
    noStroke();
    textSize(40);
    textFont('Times New Roman');
    text('TO EXPERIENCE.', 70, 370);
    
  }
  
//   function mouseReleased() {
//   fill('orange');
//   stroke('white');
//   strokeWeight(3);
//   ellipse(170, 330, 50, 50);
    
//   fill('pink');
//   stroke('white');
//   strokeWeight(3);
//   ellipse(200, 330, 50, 50);
  
//   fill('black');
//   strokeWeight(3);
//   ellipse(230, 330, 50, 50);
//   fill('white');
//   ellipse(230, 330, 30, 30);
//   fill('black');
//   ellipse(230, 330, 20, 20);

// } 
}

function circles() {
    noFill();
    strokecolor.r = random(100, 255);
    strokecolor.g = random(125, 255);
    strokecolor.b = random(150, 255);
    stroke(strokecolor.r, strokecolor.g, strokecolor.b);
    ellipse(170, height-200, 50, 50); //left
    ellipse(230, height-200, 50, 50); //right
    ellipse(width/2, 170, 50, 50); // top
    ellipse(width/2, 230, 50, 50); // bottom
    ellipse(180, height-220, 50, 50); // upper left
    ellipse(220, height-220, 50, 50); //upper right
    ellipse(180, height-180, 50, 50); // bottom left 
    ellipse(220, height-180, 50, 50); // bottom right
    
  
}
