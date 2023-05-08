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

// *** STEP 1: Grab the window into the DOM ***
let kittenSection = document.getElementById('kitten-profiles');

console.dir(kittenSection);

// **** HELPFUL START FOR LAB ****
// !!! HELPFUL FOR LAB
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];


let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
};

// *** OBJECT LITERALS ***

let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['dry food', 'mice toys', 'cat nip'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  randomAgeGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min and max - got from MDN
  },
  getAge: function(){
    this.age = this.randomAgeGenerator(3,12);
  },
  render: function(){
    this.getAge(); // this method call will populate the kitty's age
    // THIS METHOD WILL DO THE DOM MANIPULATION
    // ** Create the element **
    let articleEle = document.createElement('article');

    // ** ADD TO DOM ** parent.appendChild(child)
    kittenSection.appendChild(articleEle);

    let kittenHeading = document.createElement('h2'); // html creation
    kittenHeading.innerText = this.name; // context
    articleEle.appendChild(kittenHeading); // dom addition

    //  ! HELPFUL FOR YOUR UL/LI CREATION
    let kittenUL = document.createElement('ul');
    articleEle.appendChild(kittenUL);

    for(let i = 0; i < this.interests.length; i++){
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
  }
};


let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['wet food', 'treats', 'fish toys'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/jumper.jpeg',
  randomAgeGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAge: function(){
    this.age = this.randomAgeGenerator(3,12);
  },
  render: function(){
    this.getAge();
    let articleEle = document.createElement('article');
    kittenSection.appendChild(articleEle);

    let kittenHeading = document.createElement('h2');
    kittenHeading.innerText = this.name;
    articleEle.appendChild(kittenHeading);

    let kittenUL = document.createElement('ul');
    articleEle.appendChild(kittenUL);

    for(let i = 0; i < this.interests.length; i++){
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
  }
};

let serena = {
  name: 'Serena',
  age: 0,
  interests: ['mice', 'lasers', 'hunting'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: true,
  photo: 'img/serena.jpeg',
  randomAgeGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAge: function(){
    this.age = this.randomAgeGenerator(3,12);
  },
  render: function(){
    this.getAge();
    let articleEle = document.createElement('article');

    kittenSection.appendChild(articleEle);

    let kittenHeading = document.createElement('h2');
    kittenHeading.innerText = this.name;
    articleEle.appendChild(kittenHeading);

    let kittenUL = document.createElement('ul');
    articleEle.appendChild(kittenUL);

    for(let i = 0; i < this.interests.length; i++){
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
  }
};

// *** EXECUTABLE (executes on page load) CODE ***
frankie.render();
jumper.render();
serena.render();
console.log(frankie);
