'use strict';

// OBJECTS LITERAL - COMMA SEPARATED KEY/VALUE PAIRS

let person = {
  name: 'Audrey',
  age: 37,
  isRemote: true,
  title: 'Instructor',
  says: function(){
    console.log('Hey class!');
  },
  'last-name': 'Patterson'
}

console.log(person);

// ACCESS VALUES FROM AN OBJECT - DOT NOTATION obj.key
console.log(person.name);
console.log(person.age);

// ACCESS VALUES FROM AN OBJECT - BRACKET NOTATION
console.log(person['last-name']);

// CALL OR EXECUTE AN OBJECT'S METHOD:
person.says();

// ADDING PROPERTIES AFTER OBJECT CREATION
person.interests = ['celebs', 'tattoos', 'sleeping'];

console.log(person);

let studentA = {
  firstName: 'Gerald',
  course: '201d100',
  isRemote: true,
  says: function(){
    console.log(`Hey ${this.course}! My name is ${this.firstName} and my fav color is ${this.favColor}!`);
    // console.log(`Hey ${studentA.course}!`)
  },
  favColor: 'green'
}
studentA.says();

let studentB = {
  firstName: 'Jeffery',
  course: '201d101',
  isRemote: true,
  says: function(){
    console.log(`Hey ${this.course}!`);
  }
}

studentB.says();

let studentC = {
  firstName: 'Jennifer',
  course: '201d100',
  isRemote: true,
  says: function(){
    console.log(`Hey ${this.course}!`);
  }
}
