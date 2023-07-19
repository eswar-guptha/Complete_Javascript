'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secrateNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secrateNumber;
console.log(secrateNumber);

let score = 20;
let highScore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number');
  }
  //   when player wins the game
  else if (guess === secrateNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secrateNumber;
    document.querySelector('.number').style.borderRadius = '50%';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //  else {
    //   highScore = highScore;
    // }
  } else if (guess !== secrateNumber) {
    if (score > 1) {
      displayMessage(guess > secrateNumber ? '📈 Too high' : '📉 Too low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textConetnt = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.numebr').textContent = secrateNumber;
    }
  }
  /*
  //   when guess is too high
  else if (guess > secrateNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secrateNumber;
    }
  }
  //   when guess is too low
  else if (guess < secrateNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secrateNumber;
    }
  }
  */
});

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  secrateNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  console.log(secrateNumber);
});
