'use strict';


// ***** GLOBALS ******
let votingRounds = 15;
let goatArray = [];

// ***** DOM WINDOWS ****
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let resultBtn = document.getElementById('show-results-btn');

// ***** CANVAS ELEMENT *****
let ctx = document.getElementById('my-chart');

// **** CONSTRUCTOR FUNCTION ****
function Goat(name, imageExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${imageExtension}`;
  this.votes = 0;
  this.views = 0;
}

// **** HELPER FUNCTIONS / UTILITIES ****

function randomIndexGenerator() {
  return Math.floor(Math.random() * goatArray.length);
}

function renderImgs() {
  let imageOneIndex = randomIndexGenerator();
  let imageTwoIndex = randomIndexGenerator();

  while (imageOneIndex === imageTwoIndex) {
    imageTwoIndex = randomIndexGenerator();
  }

  imgOne.src = goatArray[imageOneIndex].image;
  imgOne.title = goatArray[imageOneIndex].name;
  imgOne.alt = `this is an image of ${goatArray[imageOneIndex].name}`;

  imgTwo.src = goatArray[imageTwoIndex].image;
  imgTwo.title = goatArray[imageTwoIndex].name;
  imgTwo.alt = `this is an image of ${goatArray[imageTwoIndex].name}`;

  goatArray[imageOneIndex].views++;
  goatArray[imageTwoIndex].views++;
}

function renderChart() {
  let goatNames = [];
  let goatViews = [];
  let goatVotes = [];

  for(let i = 0; i < goatArray.length; i++){
    goatNames.push(goatArray[i].name);
    goatViews.push(goatArray[i].views);
    goatVotes.push(goatArray[i].votes);
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: '# of Views',
        data: goatViews, // array that will hold the views
        borderWidth: 5,
        backgroundColor: ['#ff006e'],
        borderColor: ['#ff006e']
      },
      {
        label: '# of Votes',
        data: goatVotes, // array that will hold the # of votes
        borderWidth: 5,
        backgroundColor: ['#8338ec'],
        borderColor: ['#8338ec']
      }
      ]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: 'white' }
        },
        x: {
          ticks: { color: 'white' }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white',
            padding: 30,
            font: {
              size: 16
            }
          },
        }
      }
    }
  };

  new Chart(ctx, chartObj);
}


// **** EVENT HANDLERS ****
function handleImgClick(event) {

  let imageClicked = event.target.title;

  for (let i = 0; i < goatArray.length; i++) {
    if (imageClicked === goatArray[i].name) {
      goatArray[i].votes++;
      votingRounds--;
      renderImgs();
    }
  }

  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleImgClick);

    // ***** LOCAL STORAGE START HERE ******

    // ! STEP 1 - CONVERT OUR DATA TO A STRING/JSON TO STORE IN LOCAL STORAGE
    let stringifedGoats = JSON.stringify(goatArray);

    console.log('Stringifed goats >>>', stringifedGoats);

    // ! STEP 2 - STORE STRINGIED DATA TO LOCAL STORAGE
    localStorage.setItem('myGoats', stringifedGoats);
  }
}


function handleShowResults() {
  if (votingRounds === 0) {
    renderChart();
  }
  resultBtn.removeEventListener('click', handleShowResults);
}


// **** EXECUTABLE CODE *****

// ***** LOCAL STORAGE CONTINUES HERE *****

// ! STEP 3 - GET IT FROM LOCAL STORAGE

let retrievedGoats = localStorage.getItem('myGoats');

console.log('Goats from local storage >>> ', retrievedGoats);

// ! STEP 4 - CONVERT TO USEABLE CODE
let parsedGoats = JSON.parse(retrievedGoats);

console.log('parsed goats >>> ', parsedGoats);


// **** REBUILDING GOATS USING THE CONSTRUCTOR *****

if(retrievedGoats){
  for(let i = 0; i < parsedGoats.length; i++){
    if(parsedGoats[i].name === 'bunny-goat'){
      let reconstructedBunnyGoat = new Goat(parsedGoats[i].name, 'png');
      reconstructedBunnyGoat.views = parsedGoats[i].views;
      reconstructedBunnyGoat.votes = parsedGoats[i].votes;
      goatArray.push(reconstructedBunnyGoat);
    } else {
      let reconstructedGoat = new Goat(parsedGoats[i].name);
      reconstructedGoat.views = parsedGoats[i].views;
      reconstructedGoat.votes = parsedGoats[i].votes;
      goatArray.push(reconstructedGoat);
    }
  }

} else {
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
}





// **** HAPPY PATH OUT OF THE WOODS *****

// if(retrievedGoats){
//   goatArray = parsedGoats;
// } else {
//   let bunnyGoat = new Goat('bunny-goat', 'png');
//   let coolGoat = new Goat('cool-goat');
//   let cruisinGoat = new Goat('cruisin-goat');
//   let floatYourGoat = new Goat('float-your-goat');
//   let goatOutOfHand = new Goat('goat-out-of-hand');
//   let kissingGoat = new Goat('kissing-goat');
//   let sassyGoat = new Goat('sassy-goat');
//   let smilingGoat = new Goat('smiling-goat');
//   let sweaterGoat = new Goat('sweater-goat');

//   goatArray.push(bunnyGoat, coolGoat, cruisinGoat, floatYourGoat, goatOutOfHand, kissingGoat, sassyGoat, smilingGoat, sweaterGoat);
// }


renderImgs();

imgContainer.addEventListener('click', handleImgClick);
resultBtn.addEventListener('click', handleShowResults);
