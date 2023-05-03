'use strict';

/*
FOR LOOPS
  for(starting value; condition; increment/decrement the starting value){
      code that will run until the condition in no longer true
  }
*/

let nums = [1,2,3,4,5];

for(let i = 0; i < nums.length; i++){
  console.log(`On iteration ${i} this was the value: ${nums[i]}`)
}

for(let i = 0; i < nums.length; i++){
  console.log(`The sum of ${nums[i]} plus 1 is ${nums[i]+1}`);
}

let students = ['Aaron', 'Gerald', 'Jeffery', 'Wasim'];
// HINT FOR YOUR LAB - QUESTION 7 - looping through an array looking for a match

for(let i = 0; i < students.length; i++){
  if(students[i] === 'Jeffery'){
    console.log('Hey Jeffery this is your special greeting!');
  } else {
    console.log(`Hey ${students[i]} this is your plain ole greeting.`);
  }
}

for(let i = 1; i < 20; i++){
  // run for 20 times
}

// **** WHILE LOOPS ****

/*
   while(condition){
      code to run
   }
*/

let myFavNum = 30;
let userGuess = prompt('Guess my fav num');

// FOR Lab you will have to figure out how to compare a string and a num in your strictly equals world
while(userGuess !== myFavNum){
  userGuess = prompt('Guess my fav num...');
}

let numOfPizza = 0;

while(numOfPizza < 4){
  numOfPizza++;
  console.log('the universe gifted me a slice of pizza!')
}

let hungry = true;
while(hungry){
  console.log('i need lunch!');
  break;
  console.log('unreachable');
}
