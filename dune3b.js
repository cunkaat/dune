var hoverExperience = false; // Variable to track if mouse is over the text "EXPERIENCE"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('orange');
  
  // Check if mouse is over the text "EXPERIENCE"
  hoverExperience = (mouseX > 1200 && mouseX < 2200 && mouseY > 900 && mouseY < 1100);
  
  // Draw the elements
  fill('white');
  noStroke();
  textSize(100);
  textStyle(BOLD);
  textFont('Helvetica');
  text('BUT A REALITY', 140, 240);
  
  // Change fill color when mouse is over "EXPERIENCE"
  if (hoverExperience) {
    fill('white');
    cursor(HAND);
  } else {
    fill('black');
    cursor(ARROW);
  }
  text('TO EXPERIENCE', 1200, 1000);
  
  noFill();
  strokeWeight(3);
  stroke('white');
  fill('yellow');
  ellipse(width/2, height/2, 160, 160);

  // Call circles function to draw additional circles
  circles();
}

function mouseClicked() {
  // Open the specified URL in a new tab when "EXPERIENCE" is clicked
  if (hoverExperience) {
    window.open("https://cunkaat.github.io/dune/dune4.html", "_blank");
  }
}

function circles() {
  // Draw additional circles
  noFill();
  var strokecolor = {
    r: random(100, 255),
    g: random(125, 255),
    b: random(150, 255)
  };
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
