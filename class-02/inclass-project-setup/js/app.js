'use strict';

console.log('hey world hey!');

// DONE: Ask the user their name through a prompt()

let userName = prompt('What\'s your name?');

// DONE: Display that name back to the user through a custom greeting welcoming them to your site.
alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);


// TODO: prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('You are correct!');
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Sorry you are wrong, I have a daughter');
}





// TODO: Display the user’s name back to them in your final message to the user.


