var start = 0;
var inc = 0.005;
var cols, rows;
var scl = 40;

function setup() {
	createCanvas(400, 400);
	cols = floor(width / scl);
	rows = floor(height / scl);
}

function draw() {
	let yoff = start;
	for(let y=0;y<rows;y++) {
		let xoff = start;
		for(let x=0;x<cols;x++) {
			var index = (x + y * width) * 4;
			var r = noise(xoff,yoff) * 255;
			yoff += inc;

			fill(random(255),random(255),random(255));
			rect(x * scl, y * scl, scl, scl);
		}
		xoff += inc;
	}
}
