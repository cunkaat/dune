var gif_createImg;

function preload() {
  gif_createImg = createImg("dune_gif.gif");
  gif_createGif = createImg("dune_flip.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background('black');
  gif_createImg.position(0, 0);
  gif_createGif.position(0,60);

}
