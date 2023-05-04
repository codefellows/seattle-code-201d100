'use strict';

/*
 DONE: Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
 DONE: Pick a number for my user to guess
 DONE: Indicates through an alert if the guess is “too high”
 DONE: Alert if guess “too low”.
 DONE: Alert if they are correct
 DONE: It should give the user exactly four opportunities to get the correct answer. - LOOP
 DONE: After all attempts have been exhausted, tell the user the correct answer.
*/

let myAge = 37;

for(let attempts = 4; attempts > 0; attempts--){
  let guessMyAge = prompt('What is my age?');

  if(guessMyAge > myAge){
    alert('Sorry too high!');
  } else if(guessMyAge < myAge){
    alert('Sorry too low!');
  } else if(Number(guessMyAge) === myAge){ // fixed the number/string issue but still prompts when correct
    alert('Yay you are correct!');
    break;
    // attempts = 0
  }

  if(attempts === 1){
    alert('Sorry you are out of guesses, the answer was 37');
  }
}

// for(let i = 0; i < 4; i++){

// }

/*
DONE: Add a 7th question
DONE: that has multiple possible correct answers that are stored in an array.
DONE: Give the user 6 attempts to guess the correct answer. - LOOP
DONE: The guesses will end once the user guesses a correct answer
DONE: guesses will end when they run out of attempts.
DONE: Display all the possible correct answers to the user.
*/
function boyBandGuess() {
  let boyBands = ['backstreet boys', 'take that', 'one direction', 'bts'];

  for(let attempts = 6; attempts > 0; attempts--){
    let boyBandGuess = prompt('Guess one of my fav boybands!');

    for(let i = 0; i < boyBands.length; i++){
      if(boyBandGuess === boyBands[i]){
        alert('OMG I LOVE THEM!!!');
        attempts = 0;
        break;
      }
    }
  }
  alert(`Here are all my fav boybands: ${boyBands}`);
}

boyBandGuess();
