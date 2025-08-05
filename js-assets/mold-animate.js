let moldParticles = [];

function setup() {
  let canvas = createCanvas(windowWidth, 300);
  canvas.parent('p5-header');
  for (let i = 0; i < 200; i++) {
    moldParticles.push(new MoldParticle());
  }
  noStroke();
}

function draw() {
  background(0, 0, 0, 10); // translucent background for trails
  for (let p of moldParticles) {
    p.update();
    p.display();
  }
}

class MoldParticle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.angle = random(TWO_PI);
    this.speed = 1 + random(2);
    this.size = random(1, 4);
    this.hue = random(100, 180);
  }

  update() {
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
    this.angle += random(-0.2, 0.2);

    // Wrap around edges
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }

  display() {
    fill(this.hue, 100, 150, 100);
    ellipse(this.x, this.y, this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 300);
}