let graphic;
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
  graphic.fill('white');
  graphic.textStyle(BOLD);
  graphic.text('WITH THE FLOW', 300, 280);
}

function draw() {
  background("#D6C6B4");
  noStroke();
  fill('#DDAA6F');
  ellipse(width/2, height/2, 700, 700);

  // Check if the mouse is hovering over the first ellipse at (170, 100)
  if (dist(mouseX, mouseY, width / 2 - 400, height / 2 - 160) < 50) {
    ellipse1Fill = '#FFF4E3'; // Change fill color to #F4E4D1
  } else {
    ellipse1Fill = '#FFD19B'; // Revert fill color to initial color
  }
  fill(ellipse1Fill);
  ellipse(600, 280, 230, 230);

  // Check if the mouse is hovering over the second ellipse at (390, 310)
  if (dist(mouseX, mouseY, width / 2 + 400, height / 2 + 240) < 50) {
    ellipse2Fill = '#ADA092'; // Change fill color to #D6C6B4
  } else {
    ellipse2Fill = '#F2C48E'; // Revert fill color to initial color
  }
  fill(ellipse2Fill);
  ellipse(1200, 700, 230, 230);

  fill('WHITE');
  textSize(50);
  textStyle(BOLD);
  textFont('Helvetica');
  text('UNDERSTANDING MUST MOVE', 520, 300);
  text('OF THE PROCESS,', 670, 750);

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
