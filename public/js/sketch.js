let bg;
let y = 0;

function setup() {
   bg = loadImage('../Assets/images/time.jpg'); 
   createCanvas(640, 480);
}

function draw() {
   background(bg);
   
   stroke(266, 204, 0);
   line(0, y, width, y);

   y++;
   if (y > height) {
     y = 0;
   }
}

