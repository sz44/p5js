
var start = 0;
var inc = 0.05;
var cols, rows;
var scl = 20;

zoff = 0;

var fr;

var particles = [];

function setup() {
	createCanvas(400, 400);
	cols = floor(width / scl);
	rows = floor(height / scl);
	fr = createP('');

	for(let i=0;i<100;i++) {
		particles[i] = new Particle();
	}
}

function draw() {
	background(255);
	let yoff = start;
	for(let y=0;y<rows;y++) {
		let xoff = start;
		for(let x=0;x<cols;x++) {
			var index = (x + y * width) * 4;
			var angle = noise(yoff,xoff,zoff) * TWO_PI;
			var v = p5.Vector.fromAngle(angle);
			stroke(0);
			push();
			translate(x * scl, y * scl);
			rotate(v.heading());
			strokeWeight(1);
			line(0,0,scl,0);
			pop();
			xoff += inc;
		}
		yoff += inc;
		
	}
	//zoff += 0.01;
	for(let i=0;i<particles.length;i++) {
		particles[i].update();
		particles[i].show();
		particles[i].edges();
	}

	fr.html(floor(frameRate()));
}
