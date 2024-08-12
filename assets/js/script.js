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

/** add event listeners for buttons 
 * including main game functions 
 * */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('class') === 'btn');
            choice = this.textContent;
            console.log(choice);
        })
    }
})