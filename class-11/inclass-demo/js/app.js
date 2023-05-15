'use strict';


// ***** GLOBALS ******
let votingRounds = 15;
let goatArray = [];

// ***** DOM WINDOWS ****
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let resultBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-container');

// **** CONSTRUCTOR FUNCTION ****
function Goat(name, imageExtension = 'jpg'){
  this.name = name;
  this.image = `img/${name}.${imageExtension}`;
  this.votes = 0;
  this.views = 0;
}

// **** HELPER FUNCTIONS / UTILITIES ****

function randomIndexGenerator(){
  return Math.floor(Math.random() * goatArray.length);
}

function renderImgs(){
  // DONE: get 2 random images on the page
  let imageOneIndex = randomIndexGenerator();
  let imageTwoIndex = randomIndexGenerator();

  // DONE: make sure they are unique
  while(imageOneIndex === imageTwoIndex){
    imageTwoIndex = randomIndexGenerator();
  }

  imgOne.src = goatArray[imageOneIndex].image;
  imgOne.title = goatArray[imageOneIndex].name;

  imgTwo.src = goatArray[imageTwoIndex].image;
  imgTwo.title = goatArray[imageTwoIndex].name;

  // DONE: Increase the goats views
  goatArray[imageOneIndex].views++;
  goatArray[imageTwoIndex].views++;
}

// **** EVENT HANDLERS ****
function handleImgClick(event){
  // DONE: Identify the image that was clicked

  let imageClicked = event.target.title;
  // console.dir(event.target);
  // console.log(imageClicked);

  // TODO: Increase the vote on that image
  for(let i = 0; i < goatArray.length; i++){
    if(imageClicked === goatArray[i].name){
      goatArray[i].votes++;
      // TODO: decrement the voting round
      votingRounds--;
      // TODO: generate new images
      renderImgs();
    }
  }

  // TODO: once voting are done, we want to remove the ability to click
  if(votingRounds === 0){
    imgContainer.removeEventListener('click', handleImgClick);
  }

}

function handleShowResults(){
  if(votingRounds === 0){
    for(let i = 0; i < goatArray.length; i++){
      let goatListItem = document.createElement('li');

      goatListItem.textContent = `${goatArray[i].name} - Votes: ${goatArray[i].votes} & Views: ${goatArray[i].views}`;

      resultsList.appendChild(goatListItem);
    }
    resultBtn.removeEventListener('click', handleShowResults);
  }
}

// **** EXECUTABLE CODE *****
let bunnyGoat = new Goat('bunny-goat', 'png');
let coolGoat = new Goat('cool-goat');
let cruisinGoat = new Goat('cruisin-goat');
let floatYourGoat = new Goat('float-your-goat');
let goatOutOfHand = new Goat('goat-out-of-hand');
let kissingGoat = new Goat('kissing-goat');
let sassyGoat = new Goat('sassy-goat');
let smilingGoat = new Goat('smiling-goat');
let sweaterGoat = new Goat('sweater-goat');

goatArray.push(bunnyGoat, coolGoat, cruisinGoat, floatYourGoat, goatOutOfHand, kissingGoat, sassyGoat, smilingGoat, sweaterGoat);


renderImgs();

imgContainer.addEventListener('click', handleImgClick);
resultBtn.addEventListener('click', handleShowResults);
