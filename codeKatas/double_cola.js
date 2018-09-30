/* FIRST SOLUTION:
r = 6;
x = 5;
y = 5;
while(y<r) {
  //do it in 2 equations
  x = x * 2;
  y = y + x;
}

console.log("x: ", x);
console.log("y: ", y);
z = x/5
console.log("x/5 ", z);

count = 0;
while(y>=r) {
  count++
  y = y - z;
  console.log(y);
}
console.log(count);
rev = names.reverse();
console.log(rev[count-1]);
*/


names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
res = "Penny";

function whoIsNext(names, r) {
  let groupTotal = 5;
  let cansTotal = 5;
  let count = 5;

  //we know that the total amount of people will double after each in the inital group drinks
  //based on that we can find how many total cans were drunk.
  while(cansTotal < r) {
    groupTotal = groupTotal * 2;
    cansTotal = cansTotal + groupTotal;
  }

  let NumberOfEachPerson = groupTotal/5;

  while(cansTotal>=r) {
    cansTotal = cansTotal - NumberOfEachPerson;
    count--

  }

  //console.log(names[count]);
  return names[count];

}

whoIsNext(names, 5);

//A: 1 (+5) 67 (+10) 181920,21 
//5   10   20    40    80 
//1-5 6-15 16-35 36-75 76-155 

//A:1 6,7 16,17,18,19 
//A will drink the first total/5 : 
//1,2,4,8 etc...
//B will drink the first 1+1,2+2,4+4,8+8 of the group
//C 1*3,2*3,4*3,8*3
//D*4, E*5

//Chellange: do it in one loop
//loop over 5 elements add +1 for each one, but the next time it is looped over add +2, then +4 etc.
//keep looping until the total has not reached r.

function whoIsNext2(names, r) {
  let total = 0;
  let adder = 1;
  let answer = 0;
  while(total<r) {
    for(let i=0;i<names.lenth;i++) {
      total += adder;
      console.log(total);
      answer = i;
      if (total) break;
    }
    adder *= 2;
  }
  return names[answer];
}

//whoIsNext(names, 5);
//whoIsNext(names, 52);
whoIsNext2(names, 5);
//whoIsNext2(names, 52);

function whoIsNext3(names, r) {
  let total = 0;
  let adder = 1;
  let initialLength = 5;
  while(total<r) {
    for(let i=0;i<initialLength;i++) {
      total += 1;
    }
    initialLength *=2;
  }
  return names[answer];
}