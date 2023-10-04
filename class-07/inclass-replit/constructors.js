'use strict';

let personA = {
  name: 'Audrey',
  title: 'Instructor',
  course: '201d100'
};
console.log(personA);

let personB = {
  name: 'Alex',
  title: 'Student',
  course: '201d100'
};

let personC = {
  name: 'Aaron',
  title: 'Student',
  course: '201d100'
};

// CONSTRUCTOR FUNCTION 
// Parameters - UNIQUE TO EACH OBJECT
// THIS - in a constructor function will refer to the object that will be created

function Person(firstName, title){
  this.name = firstName;
  this.title = title;
  this.course = '201d100';
}

// CREATING OBJECT USING OUR CONSTRUCTOR
let aaron = new Person('Aaron', 'student');
console.log(aaron);
let alex = new Person('Alex', 'student');
console.log(alex);
let audrey = new Person('Audrey', 'instructor');
console.log(audrey);


// PROTOTYPE === INHERITS
// SPECIAL OBJECT THAT COMES WITH OUR CONSTRUCTORS
// USE THESE TO STORE OUR METHODS

Person.prototype.greeting = function(){
  console.log(`Hey ${this.course}, my name is ${this.name}`);
}

alex.greeting();
audrey.greeting();
aaron.greeting();

// Array.prototype.myMethod = function(){
//   console.log('This is my array method!');
// }

// let myArr = ['hello'];
// myArr.myMethod();
