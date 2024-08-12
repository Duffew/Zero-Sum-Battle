/**
 * Declare constants for DOM elements and
 * Declare let variables
 * Credit Ania Kubow - Code With Ania Kubow
 * - youtube
 */
const displayComputerChoice = document.getElementById('computer-emoji');
const displayPlayerChoice = document.getElementById('player-emoji');
const displayResult = document.getElementById('result-message');
let buttons = ['rock', 'paper', 'scissors'];
let choice;
let computerChoice;

/** add event listeners for buttons 
 *
 * */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('class') === 'btn');
            choice = this.textContent;
            displayPlayerChoice.innerHTML = choice;
            createComputerChoice();
            calculateResult();
        })
    }
})

/** 
 * Create a function for random computer choice 
 * Credit Ania Kubow - Code With Ania Kubow
 * - youtube
*/
function createComputerChoice() {
    const randomNumber = Math.floor(Math.random() * buttons.length);

    if (randomNumber === 0) {
        computerChoice = '👊'
    }
    if (randomNumber === 1) {
        computerChoice = '🤚'
    }
    if (randomNumber === 2) {
        computerChoice = '✌'
    }
    displayComputerChoice.innerHTML = computerChoice
}

 /**
  * Create a function for calculating the game result
  * Credit Ania Kubow - Code With Ania Kubow
 * - youtube
  */
 function calculateResult() {
    if (choice === computerChoice) {
        result = "It's a draw!"
    }
    if (choice === '👊' && computerChoice === '🤚') {
        result = "You lose!"
    }
    if (choice === '👊' && computerChoice === '✌') {
        result = "You win!"
    }
    if (choice === '🤚' && computerChoice === '✌') {
        result = "You lose!"
    }
    if (choice === '🤚' && computerChoice === '👊') {
        result = "You win!"
    }
    if (choice === '✌' && computerChoice === '👊') {
        result = "You lose!"
    }
    if (choice === '✌' && computerChoice === '🤚') {
        result = "You win!"
    }

    displayResult.innerHTML = result;
}

