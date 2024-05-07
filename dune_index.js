var gif_createImg;
var gif_createGif;
var link; 

function preload() {
  gif_createImg = createImg("dune_gif.gif");
  gif_createGif = createImg("dune_flip.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  gif_createImg.size(windowWidth, windowHeight);
  gif_createGif.size(windowWidth, windowHeight);  

}

function draw() {
  background('black');
  gif_createImg.position(0, 0);
  gif_createGif.position(0, 0);

  if (mouseIsPressed) {
    window.open('https://cunkaat.github.io/dune/dune1.html');
  }

}
