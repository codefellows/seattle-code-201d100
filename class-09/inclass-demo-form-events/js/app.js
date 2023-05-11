'use strict';

// *** STEP 1 grab the element to listen to

let buttonToBeClicked = document.getElementById('my-button');


// *** STEP 3 - define my callback function / event handler
function handleClick() {
  // console.log('event: ', event);

  alert('I have been clicked!!!');
}


// *** STEP 2: attached the eventlistener to the element
buttonToBeClicked.addEventListener('click', handleClick);


let myForm = document.getElementById('my-form');


function handleSubmit(event) {
  event.preventDefault();
  console.log(event);

  console.log(event.target.username.value);
  console.log(typeof +event.target.age.value);

}

myForm.addEventListener('submit', handleSubmit);
