let graphic;
let setting = 120;
let ellipse1Fill = '#FFD19B'; // Initial fill color for ellipse at (170, 100)
let ellipse2Fill = '#F2C48E'; // Initial fill color for ellipse at (390, 310)

function setup() {
  createCanvas(600, 400);
  background("#D6C6B4");

  // create offscreen graphics buffer
  graphic = createGraphics(600, 600);

  // type setup offscreen in buffer
  graphic.textFont('Helvetica');
  graphic.textSize(40);
  graphic.textAlign(CENTER, CENTER);
  graphic.fill('white');
  graphic.textStyle(BOLD);
  graphic.text('MUST JOIN IT,', setting + 180, setting + 160);
  graphic.text('AND FLOW WITH IT,', setting + 180, setting + 200);
}

function draw() {
  background("#D6C6B4");
  noStroke();
  fill('#DDAA6F');
  ellipse(width/2, height/2, 300, 300);

  // Check if the mouse is hovering over the first ellipse at (170, 100)
  if (dist(mouseX, mouseY, 170, 100) < 50) {
    ellipse1Fill = '#FFF4E3'; // Change fill color to #F4E4D1
  } else {
    ellipse1Fill = '#FFD19B'; // Revert fill color to initial color
  }
  fill(ellipse1Fill);
  ellipse(170, 100, 100, 100);

  // Check if the mouse is hovering over the second ellipse at (390, 310)
  if (dist(mouseX, mouseY, 390, 310) < 50) {
    ellipse2Fill = '#ADA092'; // Change fill color to #D6C6B4
  } else {
    ellipse2Fill = '#F2C48E'; // Revert fill color to initial color
  }
  fill(ellipse2Fill);
  ellipse(390, 310, 100, 100);

  const tiles = 6;
  const tileSize = (600 / tiles) + 20;

  // loop over each tile
  for (let x = 0; x < tiles; x++) {
    for (let y = 2; y < 4; y++) { // Adjusted y loop limits
      const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50;

      // think of this as applying the grid to the source in the graphics buffer
      const sx = x * tileSize + distortion;
      const sy = y * tileSize; // Adjusted y-position calculation
      const sw = tileSize;
      const sh = tileSize;

      // and this as applying the grid to the destination on the canvas
      const dx = x * tileSize;
      const dy = (y - 2) * tileSize + 140; // Adjusted y-position calculation
      const dw = tileSize;
      const dh = tileSize;

      // grided image from buffer into main canvas
      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
