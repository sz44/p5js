sd=x=>+x.toString().split('').map(v=>v*v).join('');

sd=x=>+(x+'').split('').map(v=>v*v).join('');

sd=x=>[].map.call(x+'',v=>v*v).join``;

sd=x=>+[...x+''].map(v=>v*v).join``;

//note: in browser can just use x instead of `${x}` or (x+'')
sd=x=>+(x+'').replace(/./g,v=>v*v);


//math way
sd = x => {
  let number = '';
  
  while(x>0) {
    //get last digit
    let digit = x % 10;
    //square it
    digit = digit*digit;
    //append to number
    number = digit + number;

    x = Math.floor(x/10);
  }

  return number;

}


console.log(sd(0));
console.log(sd(1111));
console.log(sd(3212));
console.log(sd(2112));
console.log(sd(159));
console.log(sd(77455754));