let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r,g,b;

function preload() {
  dvd = loadImage("7388.jpg");
}

function setup() {
  createCanvas(800,600);
  x = random(width-dvd.width);
  y = random(height-dvd.height);
  xspeed = 5;
  yspeed = 5;
  pickColor();
}

function pickColor() {
  r = random(100,256);
  g = random(100,256);
  b = random(100,256);
}

function draw() {
  background(0);
  //  rect(x,y,80,60);
  tint(r,g,b);
  image(dvd,x,y);
  x += xspeed;
  y += yspeed;

  if(x >= width - dvd.width || x <= 0) {
    xspeed = -xspeed;
    pickColor();
  }

  if( y >= height - dvd.height || y <= 0 ) {
    yspeed = -yspeed;
    pickColor();
  }

}


