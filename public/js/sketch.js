function setup() {
   createCanvas(400, 300);
}

function draw() {
   background('#000000');
   
   rectMode(CENTER);

   fill(0, 255, 0);
   stroke(0, 0, 255);
   strokeWeight(8);
   rect(200, 150, 150, 150);
   
   fill(255, 0, 0);
   noStroke();
   ellipse(150, 250, 100, 75);  
}

