var gif_createImg;
var gif_createGif;

function preload() {
  gif_createImg = createImg("dune_gif.gif");
  gif_createGif = createImg("dune_flip.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  gif_createImg.size(windowWidth, windowHeight);
  gif_createGif.size(windowWidth, windowHeight);
  
  // Add mouse click event listener to the canvas
//   canvas.mouseClicked(openURL);
}

function draw() {
  background('black');
  gif_createImg.position(0, 0);
  gif_createGif.position(0, 0);
}

// Function to open the specified URL
// function openURL() {
//   window.open("https://cunkaat.github.io/dune/dune1.html");
// }
