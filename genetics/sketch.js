//task: use genetic algorithm to generate the phrase: To be or not to be.
//utf-16 codes: 33 to 125
//give score from 0 to 20.
//create new array in which each original member is copeid so that there is a
//fitness score amount of it(0 to 20);
//1: random starting pop
//2: evalute fitness
//3: make new population
////3a: select 2 parents
////3b: crossover dna (first half of 1 + second half of 2)
////3c: mutation
//repeat from 2
let phrase = "To be or not to be.";
phrase = phrase.split("");
let n = 200;
let pop = [];
let gen = 0;

function setup() {
  createCanvas(1000,800);
  //generate 100 random text of length 20
  for(let i=0;i<n;i++) {
    let member = ranTextAr(phrase.length);
    pop.push(member);
  }
}
  
function draw() {
  background(200);
  textSize(16);
  //selection/ evaluate fitness.
  //reproduction, pick 2, create children, add mutation, add child to pop.
  //create new generation
  //sort to show top 40
  assignFitness(pop);
  pop.forEach(function(x) {
    if(x[0] === phrase.length) {
      noLoop();
      console.log(x);
      text(x, 500, 220);
      text(pop.indexOf(x), 500, 240);
    }
  });
  sSort(pop);
  //draw the pop
  let xC = 0;
  let yC = 15;
  /*
  pop.forEach(function(x) {
    let p = x.join('');
    text(p, xC, yC); 
    yc += 10;
  });
  */
  
  for(let j=0;j<40;j++) {
    //let p = pop[j].join('');
    text(pop[j], xC, yC);
    text(pop.indexOf(pop[j]), xC+300, yC);
    yC+=20;
  }
 
  text(gen, 600, 200);
  //text(pop[0],600, 220);
  //text(pop[1],600, 240);
  //sort by fitness
  //method 1: check n and n+1; if n<n+1 switch them. keep going until no
  //switchs possible
  //method 2: start from 1 and n-1 
  //selection sort
  //check fitness levels
  /*
  for(let i=0;i<pop.length;i++) {
    let score = pop[i][0];
    if(score >= 18) {
      console.log(pop[i]);
      console.log(gen);
    }
  }
 */ 
  let probArr = makeProbArr(pop);
  let newPop = [];
  //make n new children
  for(let j=0;j<n;j++) {
    newPop.push(createChild(probArr));
  }
  pop = newPop;
  gen += 1;
}

function ranTextAr(length) {
  let text = [];
  for(let i=0;i<length;i++) {
    let code = floor(random(32, 123));
    text.push(char(code));
  }
  return text;
}

function assignFitness(arr) {
  arr.forEach(function(x) {
    let score = 0;
    for(let i=0;i<x.length;i++) {
      if(phrase[i] && phrase[i] === x[i]) {
        score+=1;
      }
      //incase phrase is short match for spaces
      if(!phrase[i] && x[i] === " ") {
        score+=1;
      }
    }
    x.unshift(score);
  });
}

function makeProbArr(arr) {
  let newArr = [];
  arr.forEach(function(x) {
    for(let i=0;i<x[0];i++) {
      newArr.push(x);
    }
  });
  return newArr;
}

function createChild(arr) {
  //select 2  diff parents
  let p1 = random(arr);
  let p2;
  do {
    p2 = random(arr);
  } while(arr.indexOf(p1) === arr.indexOf(p2));
  //crossover
  //take first half of parent 1 and second half of parent 2
  let midpointP1 = floor((p1.length-1)*0.5) - 1 + 1;
  let midpointP2 = floor((p2.length-1)*0.5) - 1 + 1;
  let firstHalf = p1.slice(1,midpointP1+1);
  let secondHalf = p2.slice(midpointP2+1, p2.length);
  let newChild = firstHalf.concat(secondHalf);
  //add mutation
  let chance = floor(random(100)) <= 10;
  if(chance) { 
    let code = floor(random(32, 126));
    let letter = char(code);
    //mutate only incomplete letter
    let index = floor(random(newChild.length));
    while(newChild[index] === phrase[index]) {
      index = floor(random(newChild.length));
    }
    
    newChild.splice(index,1,letter);
  }
  //return the new child
  return newChild;
}

function sSort(arr) {
  for(let w=0;w<arr.length;w++) {
    let start = 0;
    let min = arr[start];
    let index = start;
    for(let k=start;k<arr.length;k++) {
      if(arr[k]<min) {
        min = arr[k];
        index = k;
      }
      start += 1;
    }
    if(index > start) {
      let p = arr.splice(index,1);
      arr.splice(start,0,p);
    }
  }
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}
