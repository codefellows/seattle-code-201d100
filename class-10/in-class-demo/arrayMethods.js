'use strict';

// Array Methods
// syntax: array.method();

let months = ['Dec', 'Feb', 'Apr', 'June'];

// ****** ADDING TO AN ARRAY ******

// .push(); >>> adds to the end of an array
months.push('July', 'Aug');
console.log(months);

// .unshift(); >>> add to the beginning of the array
months.unshift('Jan');
console.log(months);

// ***** REMOVE FROM AN ARRAY *****

// .pop(); >>> remove the last element from the array
// takes no arguments; returns the popped element
let aug = months.pop();
console.log(months);
console.log(aug);

// .shift(); >>> remove the first element in the array
// takes no arguments; returns the shifted element
let jan = months.shift();
console.log(months);
console.log(jan);

// Stack - First in; last out // push(); // pop();
// Queue - first in; first out // push(); // shift();

// **** ADD OR REMOVE FROM ANYWHERE IN THE ARRAY ****
// .splice();
// arg - what index to start, # of elements to remove(if any), what to add(if any)
// if removing, the return is an array of the removed elements

let splicedElem = months.splice(2,2,'March');
console.log(months);
console.log(splicedElem);

// .includes() >>> return a boolean if the arg that is passed is in the array
let isItThere = months.includes('Dec');
console.log(isItThere);
