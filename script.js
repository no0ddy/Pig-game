'use strict';
// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//declaring variables
let playing, score, activePlayer, currentScore;

//setting initial value with function

const intl = function () {
  playing = true; //to stop game after score>100
  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
};
intl();

// switching player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // to change active player
  player0El.classList.toggle('player--active'); //to remove or add class
  player1El.classList.toggle('player--active');
};
//rolling dice event
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //displaying the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //checking for dice-1
    if (dice !== 1) {
      //add to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//Hold Event
btnHold.addEventListener('click', function () {
  if (playing) {
    // updating player scores
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //checking if score greater than or equal to 100
    if (score[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner'); //to remove or add class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
    } else {
      //switching player
      switchPlayer();
    }
  }
});

//resting the game
btnNew.addEventListener('click', intl);
