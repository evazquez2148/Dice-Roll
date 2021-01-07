'use strict';

//Scores and players variables
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

//Dice variables
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //Generating a random dice number
  const dice = Math.trunc(Math.random() * 6 + 1);

  //Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `IMG/dice-${dice}.png`;

  if (dice !== 1) {
    //ADD dice to current score
    currentScore += dice;
    current0Element.textContent = currentScore;
  } else {
  }
});
