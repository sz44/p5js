let nums = [0b1111110, 0b0110000, 0b1101101, 0b1111001, 0b0110011, 0b1011011, 0b1011111, 0b1110000, 0b1111111, 0b1110011];
let colors = [];
let i = 0;
function setup() {
  createCanvas(400,400);
  frameRate(1);
}


function draw() {
  colorMode(HSB);
  background(15);
  noStroke();  
  
  //A
  fill(random(200,361),gc(nums[i],6),gc(nums[i],6));
  rect(200-40,100+100*0,80,20,5);
  //B
  fill(random(200,361),gc(nums[i],5),gc(nums[i],5));
  rect(240,120+100*0,20,80,5);
  //C
  fill(random(200,361),gc(nums[i],4),gc(nums[i],4));
  rect(240,120+100*1,20,80,5);
  //D
  fill(random(360),gc(nums[i],3),gc(nums[i],3));
  rect(200-40,100+100*2,80,20,5);
  //E
  fill(random(360),gc(nums[i],2),gc(nums[i],2));
  rect(200-60,120+100*1,20,80,5);
  //F
  fill(random(360),gc(nums[i],1),gc(nums[i],1));
  rect(200-60,120+100*0,20,80,5);
  //G
  //let g = (nums[i] >> 0) & 1 == 1 ? random(300) : 0;
  fill(random(360),gc(nums[i],0),gc(nums[i],0));
  rect(200-40,100+100*1,80,20,5);

  i = (i+1) % 10; 

}

function gc(index, value) {
  return (index >> value) & 1 == 1 ? 100 : 0;
}

