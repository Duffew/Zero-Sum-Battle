// wait for the DOM to finish loading before running the game
// get the  button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("class") === "btn") {
                let fighter = this.getAttribute("id");
                alert(`You selected ${fighter}!`);
        
            }
        })
    }
})

function runGame() {

}

function chooseFighter() {

}

function computerChoice() {

}

function calculateWinner() {

}

function incrementTally() {

}

function resetGame() {

}