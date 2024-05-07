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

  
  brighter();
}

function brighter() {
  fill('#DDAA6F');
  noStroke();
  ellipse(width / 2, height / 2+70, 700, 700);
  textSize(100);
  textFont('Helvetica');
  fill('white');
  text('STOPPING', 860, 610);
  text('IT.', 1080, 720);

  // Check if the mouse is hovering over the first ellipse at (width / 2 - 250, height / 2 - 250)
  if (dist(mouseX, mouseY, width / 2 - 250, height / 2 - 250) < 115) {
    fill('#ADA092'); // Change fill color when hovered
  } else {
    fill('#FFD19B'); // Revert fill color to initial color
  }
  ellipse((width / 2) - 250, (height / 2) - 170, 230, 230);
  //back arrow
  stroke('white');
  strokeWeight(8);
  line(((width / 2) - 280), ((height / 2) - 170),((width / 2) - 220), ((height / 2) - 170));
  line(((width / 2) - 280), ((height / 2) - 170),((width / 2) - 260), ((height / 2) - 150));
  line(((width / 2) - 280), ((height / 2) - 170),((width / 2) - 260), ((height / 2) - 190));
  noStroke();

  // Check if the mouse is hovering over the second ellipse at (width / 2 + 250, height / 2 + 250)
  if (dist(mouseX, mouseY, width / 2 + 250, height / 2 + 250) < 115) {
    fill('#FFF4E3'); // Change fill color when hovered
  } else {
    fill('#F2C48E'); // Revert fill color to initial color
  }
  ellipse((width / 2) + 250, (height / 2) + 200 + 70, 230, 230);
  //forward arrow
  stroke('white');
  strokeWeight(8);
  line(((width / 2) + 220), ((height / 2) + 270),((width / 2) + 280), ((height / 2) + 270));
  line(((width / 2) + 280), (height / 2) + 270, ((width / 2) + 260), ((height / 2) + 290));
  line(((width / 2) + 280), (height / 2) + 270, ((width / 2) + 260), ((height / 2) + 250));
  noStroke();
}

function mouseClicked() {
  // Check if the mouse is clicked within the boundaries of the first ellipse
  if (dist(mouseX, mouseY, width / 2 - 250, height / 2 - 250) < 115) {
    window.open("https://cunkaat.github.io/dune/dune4.html", "_blank");
  }
  
  // Check if the mouse is clicked within the boundaries of the second ellipse
  if (dist(mouseX, mouseY, width / 2 + 250, height / 2 + 250) < 115) {
    window.open("https://cunkaat.github.io/dune/dune6a.html", "_blank");
  }
}
