'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Display Message refactornig function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button handler
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);

  // If no number is inserted
  if (!guess) {
    displayMessage('No number was inserted.');
  }

  // If you guessed the secret number
  else if (guess === secretNumber) {
    displayMessage('Correct!');
    document.querySelector('.number').textContent = secretNumber;

    // Handles the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Visual alterations if won
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  // If you didn't guess the number
  else if (guess !== secretNumber) {
    // Having score to play
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }

    // Out of score - lost the game
    else {
      displayMessage('You lost the game...');
      document.querySelector('body').style.backgroundColor = '#500000';
    }
  }
});

// Again button handler
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
});
