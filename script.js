'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let hightscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No number!';
    displayMessage('⛔No number!');
    //When player win
  } else if (guess === SecretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = SecretNumber;
    if (score > hightscore) {
      hightscore = score;
    }
    document.querySelector('.highscore').textContent = hightscore;
    //When guess is wrong
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > SecretNumber ? '📈Too hight!' : '📉Too low!';
      displayMessage(guess > SecretNumber ? '📈Too hight!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🎆You lost the game!';
      displayMessage('🎆You lost the game!');
    }
  }
  //   //When guess is too high
  // } else if (guess > SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too hight!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🎆You lost the game!';
  //   }

  //   //When guess too low
  // } else if (guess < SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🎆You lost the game!';
  //   }
  // }
}); //Function ở đây chính là event handler (việc cần sự lí khi cái sự kiện xảy ra)
//để rõ hơn hãy đến với phần word kiến thức JS

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
});
