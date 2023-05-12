'use strict';

// Welcome to my student generator app!  There are currently 3 types of errors in this application, 1. TypeError, 2. SyntaxError, 3. ReferenceError.  Use the errors in the console to pinpoint the specific line number where the issue occurs and fix each new error as they occur.

// TODO:  Render our new students as a list in the console

let cache = [];

let students = 'Jeffery,Wasim,Jon,ChristianRhey,Kyle,Gerald,Rocio,Dylan,Alex,Aaron,Jennifer';

// constructor for each instance of a student object
function Student(name) {
  this.studentName = name;
  this.emailAddress = null;
  this.registeredCourse = null;
  this.enrolled = false;

  cache.push(this);
}


function normalizeInput(str) {
  // simulate receiving CSV data from a file and normalize it for our constructor.  expected output is an array of names that is ready to use later.
  let students = str.split(',');
  for (let i = 0; i < students.length; i++) {
    students[i] = students[i].toLowerCase();
  }
  return students;
}

Student.prototype.validate = function() {
  return `${this.studentName} added to the cache`;
}

function studentGenerator(arr) {
  // given an array, populate our global cache with objects and store them in our global cache.

  // check if array exists
  if (Array.isArray(arr)) {
    let i;
    for (i = 0; i < arr.length; i++) {
      let a = new Student(arr[i]);
      console.log(a.validate());

    }
    return `Completed.  ${i} entries added to cache.`;
  }
  else {
    return 'This function only accepts arrays.  please try again.'
  }
}

function initialize(input) {
  let studentList = normalizeInput(input);

  return studentGenerator(studentList);
}

initialize(students);
