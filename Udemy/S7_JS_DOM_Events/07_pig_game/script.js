'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// use getElementById is a little faster
const diceEl = document.querySelector('.dice');
// all buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// all Scores
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// all player
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting conditions
let playing, scores, currentScore, activePlayer;

const init = function() {
    scores = [0, 0];
    playing = true;
    activePlayer = 0;
    currentScore = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.add(`player--active`);
    player1El.classList.remove(`player--active`);
    player0El.classList.remove(`player--winner`);
    player1El.classList.remove(`player--winner`);
    
};
init();

const switchPlayer = function () {
    // if active is 0, change to 1, else 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // remove and add background to players
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    console.log('working');
    if(playing) {
        // 1. Generating a random dice rool
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        
        // 3. Check for rolled 1: if true, switch to next playing
        if(dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            // document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next playing
            switchPlayer();
        } 
    }
})


btnHold.addEventListener('click', function() {
    
    if(playing){

        //1. Add current score to active player's score
        // storing the currentScore in score array
        scores[activePlayer] += currentScore;
        // update display score for activePlayer
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //2. Check if player's score is >= 100
        // End game
        if(scores[activePlayer] >= 20){
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        // Switch to other player
        } else {
            switchPlayer();
        }

    }

});

btnNew.addEventListener('click', init);