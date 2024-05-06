let graphic;
let setting = 120;
let ellipse1Fill = '#FFD19B'; // Initial fill color for ellipse at (170, 100)
let ellipse2Fill = '#F2C48E'; // Initial fill color for ellipse at (390, 310)

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#D6C6B4");

  // create offscreen graphics buffer
  graphic = createGraphics(600, 600);

  // type setup offscreen in buffer
  graphic.textFont('Helvetica');
  graphic.textSize(70);
  graphic.textAlign(CENTER, CENTER);
  graphic.fill('black');
  graphic.textStyle(BOLD);
  graphic.text('MUST JOIN IT,', 300, 200);
  graphic.text('AND FLOW WITH IT,', 300, 320);
}

function draw() {
  background("#D6C6B4");
  noStroke();
  fill('#DDAA6F');
  ellipse(width/2, height/2, 700, 700);

  // Check if the mouse is hovering over the first ellipse at (170, 100)
  if (dist(mouseX, mouseY, width / 2 - 250, height / 2 - 250) < 115) {
    ellipse1Fill = '#ADA092'; // Change fill color to #F4E4D1
  } else {
    ellipse1Fill = '#FFD19B'; // Revert fill color to initial color
  }
  fill(ellipse1Fill);
  ellipse((width/2)-250, (height/2)-250, 230, 230);

  // Check if the mouse is hovering over the second ellipse at (390, 310)
  if (dist(mouseX, mouseY, width / 2 + 250, height / 2 + 250) < 115) {
    ellipse2Fill = '#FFF4E3'; // Change fill color to #D6C6B4
  } else {
    ellipse2Fill = '#F2C48E'; // Revert fill color to initial color
  }
  fill(ellipse2Fill);
  ellipse((width/2)+250, (height/2)+250, 230, 230);

  const tiles = 6;
  const tileSize = (600 / tiles) + 20;

  // Calculate the starting position for the grid of tiles
  const startX = width / 2 - 300;
  const startY = height / 2 - 260;

  // loop over each tile
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50;

      // think of this as applying the grid to the source in the graphics buffer
      const sx = x * tileSize + distortion;
      const sy = y * tileSize;
      const sw = tileSize;
      const sh = tileSize;

      // and this as applying the grid to the destination on the canvas
      const dx = x * tileSize + startX;
      const dy = y * tileSize + startY;
      const dw = tileSize;
      const dh = tileSize;

      // grided image from buffer into main canvas
      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}

function mouseClicked() {
  // Check if the mouse is clicked within the boundaries of the first ellipse
  if (dist(mouseX, mouseY, width / 2 - 250, height / 2 - 250) < 115) {
    window.open("https://cunkaat.github.io/dune/dune6a.html", "_blank");
  }
  
  // Check if the mouse is clicked within the boundaries of the second ellipse
  if (dist(mouseX, mouseY, width / 2 + 250, height / 2 + 250) < 115) {
    window.open("https://cunkaat.github.io/dune/dune7.html", "_blank");
  }
}
