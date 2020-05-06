//let chara;

function preload() {
//  chara = loadModel("/fan.obj", true);
}


class Player {

  constructor(size) {
    this.acc;
    this.vel;
    this.gravity;
    this.weight = size / 2;
    this.friction = 0.3;
    this.grounded = true;
    this.floor = 100;

    this.pos = new createVector(0, this.floor, 50);
  }

  move() {
    if (keyIsPressed) {
      this.acc += this.vel;
    } else {
      this.acc = float((0.1 * this.weight) - this.friction);
    }

    if (keyIsDown(68)) {
      this.pos.add(this.acc, 0, 0);
    }
    if (keyIsDown(65)) {
      this.pos.sub(this.acc, 0, 0);
    }
    if (keyIsDown(87)) {
      this.pos.sub(0, 0, this.acc);
    }
    if (keyIsDown(83)) {
      this.pos.add(0, 0, this.acc);
    }
  }

  phys() {
    this.floor = 90;

    this.acc = float((0.1 * this.weight) - this.friction);
    this.vel = 0.5 * this.friction;

    this.i = 0;
    this.playerFacing = 0;

    this.gravity = this.weight - this.friction;

    //jump
    if (keyIsPressed && keyCode === 32 && this.grounded == true) {
      this.pos.sub(0, this.acc * 20, 0);
      this.grounded = false;
    }

    //edge
    if (this.pos.x <= -206 || this.pos.x >= 216) {
      push();
      rotateX(this.gravity * 0.25);
      this.pos.y += this.gravity * 0.25;
      pop();
    }

    if (this.pos.z <= -420 || this.pos.z >= 126) {
      push();
      rotateZ((this.pos.y * 1.25) * TWO_PI);
      this.pos.y += this.gravity * 0.025;
      pop();
    }

  }

  show() {
    push();
    strokeWeight(1);
    translate(this.pos.x, this.pos.y, this.pos.z);
    //fill('#D81B5E');
    emissiveMaterial("#FCE205");
    box(this.size);
    rotateZ(PI);
    //scale(0.6);
    //model(chara);
    pop();

    console.log(this.acc);
    console.log(this.pos);
    console.log(this.grounded);

    if (this.grounded == false) {
      this.pos.y = 100;
      this.grounded = true;
    }
  }
}
