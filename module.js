var stuff = require('./stuff');

function callfunction(fun){
  fun();
}

// function expression
var sayBye = function(){
  console.log('bye');
}

callfunction(sayBye);
ar = [3, 4, 5, 6, 8];

console.log(stuff.counter(ar));
console.log(stuff.adder(4, 5));
console.log(stuff.adder(stuff.pi, 5));
