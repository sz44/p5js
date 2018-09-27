function compare(number1, number2) {
  let [base1, exp1] = number1;
  let [base2, exp2] = number2;
  //find out what I need to raise base1 by to equale base2 ** exp2
  let y = exp2 * (Math.log10(base2)/Math.log10(base1));

  return y<exp1 ? number1 : number2;
}

function compare2(number1, number2) {
  let [base1, exp1] = number1;
  let [base2, exp2] = number2;
  //take log10 of both of them and comapare that
  let a = exp1 * Math.log10(base1);
  let b = exp2 * Math.log10(base2);

  return b<a ? number1 : number2;
}

console.log(compare([3,25], [18,10]));
console.log(compare([2,11], [3,7]));
console.log(compare([5,1000], [6,900]));

console.log(compare2([3,25], [18,10]));
console.log(compare2([2,11], [3,7]));
console.log(compare2([5,1000], [6,900]));