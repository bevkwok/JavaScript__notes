'use strict';

// document.querySelector('.message');
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!👾'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 22;


console.log(document.querySelector('.guess').value); // this is an input tag so we use .value
document.querySelector('.guess').value = 33;
*/

let secretNumber = Math.trunc(Math.random()*20 + 1);
let highScore = 0;
let score = 20;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20 + 1);
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing';
    displayMessage('Start guessing');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);


    // when there is no input
    if(!guess){
        // document.querySelector('.message').textContent = '🚫 NO NUMBER'
        displayMessage('🚫 NO NUMBER');

    // when player wins
    } else  if(guess === secretNumber){
        // document.querySelector('.message').textContent = '🥳 YOU ARE CORRECT';
        displayMessage('🥳 YOU ARE CORRECT');

        
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    // when guess is wrong
    } else if(guess !== secretNumber) {

        if(score > 1){

            // document.querySelector('.message').textContent = guess > secretNumber ? 'Number is too high' : 'Number is too low';
            displayMessage(guess > secretNumber ? 'Number is too high' : 'Number is too low');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '☹️ You lost the game';
            displayMessage('☹️ You lost the game');
            document.querySelector('.score').textContent = 0;
        }

    }
    // // when guess is too hight
    // } else  if(guess > secretNumber){
    //     if(score > 0){

    //         document.querySelector('.message').textContent = '☹️ NUMBER is too High';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '☹️ You lost the game';
    //     }

    // // when guess is too low
    // } else if(guess < secretNumber){
    //     if(score > 0){

    //         document.querySelector('.message').textContent = '☹️ NUMBER is too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '☹️ You lost the game';
    //     }
    // }

});
// first we select the button with a class name called check
// add eventListener to that button
// when button is clicked
// the console will print the value in the input called guess

const x = function() {
    console.log(23);
}