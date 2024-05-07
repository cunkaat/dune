var gif_createImg;
var gif_createGif;
var link; 

function preload() {
    gif_createImg = createImg("dune_about.png");
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
  
    gif_createImg.size(windowWidth, windowHeight);
    
  
  }
  
  function draw() {
    background('black');
    gif_createImg.position(0, 0);
    gif_createGif.position(0, 0);

    fill('white');
    noStroke();
    textSize(100);
    textStyle(BOLD);
    textFont('Helvetica');
    text(ABOUT, width/2-30, 100);

    if (mouseIsPressed) {
      window.open('https://cunkaat.github.io/dune/index.html');
    }
  
  }