'use strict';

// function declaration
// hoisting
function greeting(){
  console.log('Hey class 201d100');
}
greeting();


// function expression

let newGreeting = function(){
  console.log('This is another greeting');
}
newGreeting();

// function with parameters and a return

function square(num){
  return num * num;
}

let mySquare = square(2);
console.log(mySquare)

function sum(a,b){
  console.log('this is a: ', a);
  console.log('this is b: ', b);
  return a + b;
  console.log('this is unreachable code');
}

let mySum = sum(2,4);
let mySecondSum = sum(5,10);

// console.log(mySum)
// console.log(mySecondSum);

function equations(a,b){
  let product = a*b;
  let sum = a+b;
  let difference = a-b;

  return [product, sum, difference];
}

let myNums = equations(2,4);

let myProduct = equations(5,10)[0];

console.log(myProduct);
