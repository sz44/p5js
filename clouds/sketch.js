var start = 0;
var inc = 0.005;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	let xoff = start;
	loadPixels();
	for(let x=0;x<width;x++) {
		let yoff = start;
		for(let y=0;y<height;y++) {
			var index = (x + y * width) * 4;
			var r = noise(xoff,yoff) * 255;
			pixels[index+0] = r; 
			pixels[index+1] = r+60;
			pixels[index+2] = r+120;
			pixels[index+3] = 255;
			yoff += inc;
		}
		xoff += inc;
	}
	updatePixels();
	start += 0.01;
}


