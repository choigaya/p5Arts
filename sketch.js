function setup() {
    createCanvas(640, 480);
}

function draw() {
   if (mouseIsPressed) {
     fill(0);
   } else {
     fill(255);
   }
   
   ellipse(mouseX, mouseY, 80, 80); // # TODO: ellipse(x, y, width, height),default: w:100,h:100   
}

