'use strict';

// **** GLOBAL VARIABLES ****
const kittenArray = [];
let kittenSection = document.getElementById('kitten-profiles');

// **** Grabbing form for event submission

let myForm = document.getElementById('kitty-form');

// **** HELPER FUNCTION / UTILITIES ****

function renderAll(){
  for(let i = 0; i < kittenArray.length; i++){
    kittenArray[i].render();
  }
}


// ***** FORM SUBMISSION EVENT LISTENER AND HANDLER **********
function handleSubmit(event){
  event.preventDefault();
  // TODO: grab the values from the form
  let kittyName = event.target.kittyName.value;
  let photo = event.target.photo.value;

  let interests = event.target.interests.value;
  // interests = mice,cat nip,playing
  interests = interests.split(',');
  // ['mice', 'cat nip', 'playing']

  let isGoodWithCats = event.target.isGoodWithCats.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithKids = event.target.isGoodWithKids.checked;

  // TODO: create a new kitten with those values

  let newKitten = new Kitten(kittyName, isGoodWithCats, isGoodWithDogs, isGoodWithKids, interests, photo);

  kittenArray.push(newKitten);
  newKitten.render();

  myForm.reset();
}


myForm.addEventListener('submit', handleSubmit);

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

