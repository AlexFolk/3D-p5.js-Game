let character;

function setup() {
  createCanvas(400, 400, WEBGL);
  character = new Player(50);
}

function draw() {
  background('#3C4E5C');
  directionalLight(255, 255, 255, createVector(0, 0, 0), '#FFFFFF', width, height, 0);

  if (mouseIsPressed) {
    rotateY(atan2(mouseY - character.pos.y, mouseX - character.pos.x) - radians(90));
  }

  push();
  translate(0, 150, -240);
  rotateX(1.6);
  fill('#322214');
  plane(width * 1.25, height * 1.75, 2);
  pop();

  push();
  character.show();
  character.move();
  character.phys();
  pop();
}
