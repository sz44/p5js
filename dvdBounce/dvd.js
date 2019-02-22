let x;
let y;

let xspeed;
let yspeed;

function setup() {
  createCanvas(800,600);
  x = 400;
  y = 300;
  xspeed = 10;
  yspeed = 10;
}

function draw() {
  background(0);
  rect(x,y,80,60);
  x += xspeed;
  y += yspeed;

  if(x == width - 80 || x == 0) {
    xspeed *= -1;
  }

  if( y == height - 60 || y==0 ) {
    yspeed *= -1;
  }

}


