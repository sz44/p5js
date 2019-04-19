function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i=0; i<arr.length;i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function makeNRandomNums(n,max) {
  let arr = [];
  while(arr.length<n) {
    let r = floor(random(max));
    if(!arr.includes(r)) {
      arr.push(r);
    };
  };
  return arr;
}

let grid;
let bees;
let cols;
let rows;
let w = 60;
let buttonE;
let buttonM;
let buttonH;
let message;
//easy - 601 x 601, 10 x 10, w=60, bees = 10
//med  - 601 x 601, 20 x 20, w=30, bees = 40
//hard - 601 x 601, 30 x 30, w=20, bees = 90
function setup() {
  createCanvas(601, 601);
  buttonE = createButton("easy");
  buttonM = createButton("medium");
  buttonH = createButton("hard");
  
  newGame(w);

  buttonE.mousePressed(newGame1);
  buttonM.mousePressed(newGame2);
  buttonH.mousePressed(newGame3);
  
}

function newGame1() {
  newGame(60);
}
function newGame2() {
  newGame(30);
}
function newGame3() {
  newGame(20);
}

function newGame(level) {
  w = level;
  cols = floor(width/w);
  rows = floor(height/w);
  grid = make2DArray(cols,rows);
  bees = makeNRandomNums((cols*rows)*0.1, cols*rows); 
  if(message) message.remove();

  for(let i=0;i<cols;i++) {
    for(let j=0;j<rows;j++) {
      grid[i][j] = new Cell(i, j, w);
      if(bees.includes(i*rows+j)) {
        grid[i][j].makeBee();
      }
    }
  }
  for(let i=0;i<cols;i++) {
    for(let j=0;j<rows;j++) {
      grid[i][j].countBees();
    }
  }
}

function gameover() {
  for(let i = 0; i < cols ; i++) {
    for(let j = 0; j < rows ; j++) {
      grid[i][j].reveal();
    }
  }
  message = createElement('H2', 'BOOOOM! gameover');
}

function mousePressed() {
  for(let i = 0; i < cols ; i++) {
    for(let j = 0; j < rows ; j++) {
      if(grid[i][j].contains(mouseX,mouseY)) {
        grid[i][j].reveal();
        if (grid[i][j].bee) {
          gameover();
        }
      }
    }
  }
}

function draw() {
  background(140);
  for(let i = 0; i<cols;i++) {
    for(let j = 0; j<rows;j++) {
      grid[i][j].show();
    }
  }
}

