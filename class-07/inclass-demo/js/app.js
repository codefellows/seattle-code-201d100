'use strict';

// Tony is a volunteer for the kitten rescue... they need a way to get the profiles of kittens who will be up for adoption onto the page... new kittens come in and they need to be added. Tony knows a little bit of javascript... he can make objects!

// ? what are we going to display?
// Kittens
// TODO figure out what info about each kitten we need to show:
// * name
// * age with a function - 3 months and 12 months
// * interests []
// * isGoodWithCats
// * isGoodWithDogs
// * isGoodWithKids
// * photo

// **** GLOBAL VARIABLES ****
const kittenArray = [];

// *** STEP 1: Grab the window into the DOM ***
let kittenSection = document.getElementById('kitten-profiles');

// **** HELPER FUNCTION / UTILITIES ****

function renderAll(){
  for(let i = 0; i < kittenArray.length; i++){
    kittenArray[i].render();
  }
}


// **** CONSTRUCTOR FUNCTION ****
function Kitten(name, isGoodWithCats, isGoodWithDogs, isGoodWithKids, interests, photo) {
  this.name = name;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.interests = interests;
  this.photo = photo;
  this.age = 0;
}


// **** PROTOTYPE METHODS ****
Kitten.prototype.randomAgeGenerator = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Kitten.prototype.getAge = function () {
  this.age = this.randomAgeGenerator(3, 12);
};

Kitten.prototype.render = function () {
  this.getAge();
  let articleEle = document.createElement('article');
  kittenSection.appendChild(articleEle);

  let kittenHeading = document.createElement('h2');
  kittenHeading.innerText = this.name;
  articleEle.appendChild(kittenHeading);

  let kittenUL = document.createElement('ul');
  articleEle.appendChild(kittenUL);

  for (let i = 0; i < this.interests.length; i++) {
    let interestLI = document.createElement('li');
    interestLI.innerText = this.interests[i];
    kittenUL.appendChild(interestLI);
  }

  let ageElem = document.createElement('p');
  ageElem.innerText = `Age: ${this.age} months`;
  articleEle.appendChild(ageElem);

  let imgElem = document.createElement('img');
  imgElem.src = this.photo;
  imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
  articleEle.appendChild(imgElem);

  // *** TABLE DEMO ****
  let table = document.createElement('table');
  articleEle.appendChild(table);

  let rowHeading = document.createElement('tr');
  table.appendChild(rowHeading);

  let goodWithCatCell = document.createElement('th');
  goodWithCatCell.textContent = 'Is good with Cats';
  rowHeading.appendChild(goodWithCatCell);

  let goodWithDogCell = document.createElement('th');
  goodWithDogCell.textContent = 'Is good with Dogs';
  rowHeading.appendChild(goodWithDogCell);

  let goodWithKidsCell = document.createElement('th');
  goodWithKidsCell.textContent = 'Is good with Kids';
  rowHeading.appendChild(goodWithKidsCell);

  let rowValues = document.createElement('tr');
  table.appendChild(rowValues);

  let goodWithCatValue = document.createElement('td');
  goodWithCatValue.textContent = this.isGoodWithCats;
  rowValues.appendChild(goodWithCatValue);

  let goodWithDogValue = document.createElement('td');
  goodWithDogValue.textContent = this.isGoodWithDogs;
  rowValues.appendChild(goodWithDogValue);

  let goodWithKidValue = document.createElement('td');
  goodWithKidValue.textContent = this.isGoodWithKids;
  rowValues.appendChild(goodWithKidValue);
};

// *** EXECUTABLE (executes on page load) CODE ***
let frankie = new Kitten('Frankie', true, false, true, ['dry food', 'mice toys', 'cat nip'], 'img/frankie.jpeg');
let jumper = new Kitten('Jumper', false, false, true, ['wet food', 'treats', 'fish toys'], 'img/jumper.jpeg');
let serena = new Kitten('Serena', false, false, false, ['mice', 'lasers', 'hunting'], 'img/serena.jpeg');

kittenArray.push(frankie, jumper, serena);

renderAll();

// frankie.render();
// jumper.render();
// serena.render();
// console.log(frankie);




// let frankie = {
  //   name: 'Frankie',
  //   age: 0,
  //   interests: ['dry food', 'mice toys', 'cat nip'],
  //   isGoodWithCats: true,
  //   isGoodWithDogs: false,
  //   isGoodWithKids: true,
  //   photo: 'img/frankie.jpeg',
  //   randomAgeGenerator: function (min, max) {
  //     return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min and max - got from MDN
  //   },
  //   getAge: function () {
  //     this.age = this.randomAgeGenerator(3, 12);
  //   },
  //   render: function () {
  //     this.getAge(); // this method call will populate the kitty's age
  //     // THIS METHOD WILL DO THE DOM MANIPULATION
  //     // ** Create the element **
  //     let articleEle = document.createElement('article');

  //     // ** ADD TO DOM ** parent.appendChild(child)
  //     kittenSection.appendChild(articleEle);

  //     let kittenHeading = document.createElement('h2'); // html creation
  //     kittenHeading.innerText = this.name; // context
  //     articleEle.appendChild(kittenHeading); // dom addition

  //     let kittenUL = document.createElement('ul');
  //     articleEle.appendChild(kittenUL);

  //     for (let i = 0; i < this.interests.length; i++) {
  //       let interestLI = document.createElement('li');
  //       interestLI.innerText = this.interests[i];
  //       kittenUL.appendChild(interestLI);
  //     }

  //     let ageElem = document.createElement('p');
  //     ageElem.innerText = `Age: ${this.age} months`;
  //     articleEle.appendChild(ageElem);

  //     let imgElem = document.createElement('img');
  //     imgElem.src = this.photo;
  //     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
  //     articleEle.appendChild(imgElem);
  //   }
  // };


  // let jumper = {
  //   name: 'Jumper',
  //   age: 0,
  //   interests: ['wet food', 'treats', 'fish toys'],
  //   isGoodWithCats: true,
  //   isGoodWithDogs: true,
  //   isGoodWithKids: true,
  //   photo: 'img/jumper.jpeg',
  //   randomAgeGenerator: function (min, max) {
  //     return Math.floor(Math.random() * (max - min + 1) + min);
  //   },
  //   getAge: function () {
  //     this.age = this.randomAgeGenerator(3, 12);
  //   },
  //   render: function () {
  //     this.getAge();
  //     let articleEle = document.createElement('article');
  //     kittenSection.appendChild(articleEle);

  //     let kittenHeading = document.createElement('h2');
  //     kittenHeading.innerText = this.name;
  //     articleEle.appendChild(kittenHeading);

  //     let kittenUL = document.createElement('ul');
  //     articleEle.appendChild(kittenUL);

  //     for (let i = 0; i < this.interests.length; i++) {
  //       let interestLI = document.createElement('li');
  //       interestLI.innerText = this.interests[i];
  //       kittenUL.appendChild(interestLI);
  //     }

  //     let ageElem = document.createElement('p');
  //     ageElem.innerText = `Age: ${this.age} months`;
  //     articleEle.appendChild(ageElem);

  //     let imgElem = document.createElement('img');
  //     imgElem.src = this.photo;
  //     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
  //     articleEle.appendChild(imgElem);
  //   }
  // };

  // let serena = {
  //   name: 'Serena',
  //   age: 0,
  //   interests: ['mice', 'lasers', 'hunting'],
  //   isGoodWithCats: true,
  //   isGoodWithDogs: false,
  //   isGoodWithKids: true,
  //   photo: 'img/serena.jpeg',
  //   randomAgeGenerator: function (min, max) {
  //     return Math.floor(Math.random() * (max - min + 1) + min);
  //   },
  //   getAge: function () {
  //     this.age = this.randomAgeGenerator(3, 12);
  //   },
  //   render: function () {
  //     this.getAge();
  //     let articleEle = document.createElement('article');

  //     kittenSection.appendChild(articleEle);

  //     let kittenHeading = document.createElement('h2');
  //     kittenHeading.innerText = this.name;
  //     articleEle.appendChild(kittenHeading);

  //     let kittenUL = document.createElement('ul');
  //     articleEle.appendChild(kittenUL);

  //     for (let i = 0; i < this.interests.length; i++) {
  //       let interestLI = document.createElement('li');
  //       interestLI.innerText = this.interests[i];
  //       kittenUL.appendChild(interestLI);
  //     }

  //     let ageElem = document.createElement('p');
  //     ageElem.innerText = `Age: ${this.age} months`;
  //     articleEle.appendChild(ageElem);

  //     let imgElem = document.createElement('img');
  //     imgElem.src = this.photo;
  //     imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
  //     articleEle.appendChild(imgElem);
  //   }
  // };
