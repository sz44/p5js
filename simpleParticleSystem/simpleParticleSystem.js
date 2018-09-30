let particles = [];
function setup() {
  createCanvas(600, 400);
  let p = new Particle();
  particles.push(p);
}

function draw() {
  background(0);
  for (let i=0; i<particles.length; i++) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
  let p = new Particle();
  particles.push(p);
}

class Particle {
  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -=5;
  }

  finished() {
    return this.alpha < 0;
  }

  show() {
    stroke(255);
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }
}