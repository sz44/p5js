function Cell(i,j,w) {
  this.i = i;
  this.j = j;
  this.x = i*w;
  this.y = j*w;
  this.w = w; 
  this.bee = false;
  this.revealed = false;
  this.neighborCount = 0;
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  square(this.x, this.y, this.w);
  if (this.revealed) {
    fill(120);
    square(this.x, this.y, this.w);
    if (this.bee) {
      fill(255,255,0);
      ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
    } else {
      if(this.neighborCount>0) {
        textAlign(CENTER);
        textSize(this.w * 0.5);
        fill(0);
        text(this.neighborCount, this.x+this.w*0.5, this.y+this.w*0.7);
      }
    }
  }
}
Cell.prototype.countBees = function() {
  if(this.bee) {
    return;
  }
  let total = 0;
  for(let xoff=-1;xoff<=1;xoff++) {
    for(let yoff=-1;yoff<=1;yoff++) {
      let i = this.i+xoff;
      let j = this.j+yoff;
      if(i>-1 && i<rows && j>-1 && j<cols) {
        let neighbor = grid[i][j];
        if(neighbor.bee) {
          total++;
        }
      }
    }
  }
  this.neighborCount = total;
}

Cell.prototype.contains = function(x,y) {
  let inX = (x > this.x && x < this.x + this.w);
  let inY = (y > this.y && y < this.y + this.w);
  return (inX && inY);
}

Cell.prototype.reveal = function() {
  this.revealed = true;
  if(this.neighborCount === 0 && !this.bee) {
    this.floodFill();
  } 
}

Cell.prototype.floodFill = function() {
 for(let xoff=-1;xoff<=1;xoff++) {
    for(let yoff=-1;yoff<=1;yoff++) {
      let i = this.i+xoff;
      let j = this.j+yoff;
      if(i>-1 && i<rows && j>-1 && j<cols) {
        let neighbor = grid[i][j];
        if(!neighbor.bee && !neighbor.revealed) {
          neighbor.reveal();
        }
      }
    }
  } 
}

Cell.prototype.makeBee = function() {
  this.bee = true;
}


