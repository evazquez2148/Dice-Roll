'use strict';

//Scores and players variables
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

//Dice variables
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPLayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //Generating a random dice number
  const dice = Math.trunc(Math.random() * 6 + 1);

  //Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `IMG/dice-${dice}.png`;

  // check for rolled 1
  if (dice !== 1) {
    //ADD dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //Switch to next player
    switchPLayer();
  }
});

btnHold.addEventListener('click', function () {
  //Add current score to active player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //Check if player score is >=100
  if (scores[activePlayer] >= 10) {
    //Games finishes
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    //Switch to next player
    switchPLayer();
  }
});
