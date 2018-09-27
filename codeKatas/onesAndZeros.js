const binaryArrayToNumber = arr => {
  let sum = 0;
  for(let i=arr.length-1, j=0;i>-1;i--,j++) {
    sum += arr[i] * (2 ** j);
  }
  return sum;
};

const binaryArrayToNumber2 = arr => {
  let sum = 0;
  for(let i=arr.length-1;i>-1;i--) {
    sum += arr[i] * (2 ** (arr.length-1-i));
  }
  return sum;
};

const binaryArrayToNumber3 = arr => {
  let sum = 0;
  for(let i=0;i<arr.length;i++) {
    sum += arr[i] * (2 ** (arr.length-1-i));
  }
  return sum;
};

const binaryArrayToNumber4 = arr => {
  const reducer = (acc,cur,inx) => {
    return acc + cur * (2**(arr.length-1-inx))
  };
  return arr.reduce(reducer,0);
  //return arr.reduce( (acc,cur,inx) => {acc + cur * (2**(arr.length-1-inx))} , 0 );

};


const binaryArrayToNumber5 = arr => {
  let sum = 0;
  arr.forEach((val, i) => {
    sum += val * (2**(arr.length-1-i));
  });
  return sum;
};

const binaryArrayToNumber6 = arr => {
  return arr
          .map((val,i) => (val * (2**(arr.length-1-i))))
          .reduce((acc,val) => (acc + val),0);
}

const binaryArrayToNumber7 = arr => {
  //stop if length < 1
  //[0,1,0,1] =>  [1,0,1] =>  [0,1] =>  [1] => []
  // add arr[0] * arr.length-1 to binartArrayToNumber7(smaller array)
  return arr.length ? (2**(arr.length-1)) * arr[0] + binaryArrayToNumber7(arr.slice(1)) : 0;

}

const binaryArrayToNumber8 = arr => parseInt(arr.join(''),2);

const binaryArrayToNumber9 = arr => {
  return arr.reduceRight((acc,cur,inx) => {
     return acc + (cur * (2**(arr.length-1-inx)))
  },0);
};


console.log("1: ",binaryArrayToNumber([1,1,0,1]));
console.log("2: ",binaryArrayToNumber2([1,1,0,1]));
console.log("3: ",binaryArrayToNumber3([1,1,0,1]));
console.log("4: ",binaryArrayToNumber4([1,1,0,1]));
console.log("5: ",binaryArrayToNumber5([1,1,0,1]));
console.log("6: ",binaryArrayToNumber6([1,1,0,1]));
console.log("7: ",binaryArrayToNumber7([1,1,0,1]));
console.log("8: ",binaryArrayToNumber8([1,1,0,1]));
console.log("9: ",binaryArrayToNumber9([1,1,0,1]));


var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element ) { 
  return element.length; 
}); // [8, 6, 7, 9]

elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

elements.map(element => element.length); // [8, 6, 7, 9]

elements.map(({ length }) => length); // [8, 6, 7, 9]