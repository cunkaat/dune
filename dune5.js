function setup() {
    createCanvas(600, 400);
    // link = createA('github_linkgoeshere', 'link title');
  }
  
  function draw() {
    background('#FFF1E0');
    textSize(12);
    textFont('Helvetica');
    textStyle(BOLD);
    fill('black');
    text('SO I QUOTED THE FIRST LAW OF MENTAT TO HER:', 150, 50);
    
    brighter();
  }
  
  // function mousePressed() {
  //   if (mouseX > 140 && mouseX < 260 && mouseY > 200 && mouseY < 310) {
      
  //   }
  // }
  
  function mouseOverCircle() {
    // Calculate the distance between mouse position and circle center
    let d = dist(mouseX, mouseY, width/2, 220);
    // Check if the distance is less than or equal to the radius
    return (d <= 150); // 150 is the radius of the largest circle
  }
  
  function brighter() {
    fill('#DDAA6F');
    noStroke();
    ellipse(width/2, 220, 300, 300);
    textSize(45);
    textFont('Helvetica');
    fill('white');
    text('STOPPING', 185, 220);
    text('IT.', 275, 270);
    
    if (mouseX > 185 && mouseX < 420 && mouseY > 180 && mouseY < 300) {
    textSize(45);
    textFont('Helvetica');
    fill('black');
    text('STOPPING', 185, 220);
    text('IT.', 275, 270);
      
    }
  }
  