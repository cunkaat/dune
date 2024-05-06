var strokecolor = {
    r: 0,
    g: 0,
    b: 0
  }
  
  var hoverCircle = false; // Variable to track if mouse is over the circle
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
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
    
    // Draw the elements
    fill('grey');
    noStroke();
    textSize(100);
    textStyle(BOLD);
    textFont('Helvetica');
    text('BUT A REALITY', 140, 240);
      
    noFill();
    strokeWeight(3);
    stroke('white');
    fill(hoverCircle ? 'black' : 'orange');
    noStroke();
    ellipse(width/2, height/2, 160, 160);
    
    // Call mouseClicked function when mouse is pressed
    if (mouseIsPressed) {
      mouseClicked();
    }
  }
  
  function mouseClicked () {
    window.open("https://cunkaat.github.io/dune/dune3b.html", "_blank");
  }
  function circles() {
    noFill();
    strokecolor.r = random(100, 255);
    strokecolor.g = random(125, 255);
    strokecolor.b = random(150, 255);
    stroke(strokecolor.r, strokecolor.g, strokecolor.b);
    ellipse((width/2)-70, height/2, 140, 140); //left
    ellipse((width/2)+70, height/2, 140, 140); //right
    ellipse(width/2, (height/2)-70, 140, 140); // top
    ellipse(width/2, (height/2)+70, 140, 140); // bottom
    ellipse((width/2)-50, (height/2)-50, 140, 140); // upper left
    ellipse((width/2)+50, (height/2)-50, 140, 140); //upper right
    ellipse((width/2)-50, (height/2)+50, 140); // bottom left 
    ellipse((width/2)+50, (height/2)+50, 140, 140); // bottom right
  }
  