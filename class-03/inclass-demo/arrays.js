'use strict';

let nums = [3,5,7,9,11];

// console.log(nums);
// console.table(nums); // HELPFUL TO SEE THE INDEXES

let mixedArr = [['hello', 'bye'], true, [1,2,3]];
// console.table(mixedArr);

// *** REFERENCE ELEMENTS IN THE ARRAY - BRACKET NOTATION ***

let myBoolVal = mixedArr[1];
// console.log(myBoolVal);
let str = mixedArr[0];
// console.log(str);
//                   [1,2,3][0]
let myNumOfOne = mixedArr[2][0];
// console.log(myNumOfOne);

// *** ADDING TO AN ARRAY ****
let students = ['Jesse', 'Gerald', 'Jennifer'];

console.log(students)
students[3] = 'Jon';
students[6] = 'Alex';
console.log(students[4]);
students[4] = 'Kyle';
console.log(students[4]);

// *** PUSH METHOD ***
// add to the end of the array
students.push('Cooper');
console.log(students);
students.push('Christian Rhey', 'Jeffery');
console.log(students);

console.log(students.length);


// *** REMOVE FROM THE ARRAY ***
// *** POP - REMOVE THE LAST ELEMENT FROM THE ARRAY***

let jeffery = students.pop();
console.log(jeffery);
console.log(students);
