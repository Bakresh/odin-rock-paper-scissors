let computerChoice;
let playerChoice;

function getComputerChoice() {
    const computerRandomChoice = Math.floor(Math.random() * 3);
    if (computerRandomChoice === 0) {
        computerChoice = "Rock";
    } else if (computerRandomChoice === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
}

getComputerChoice();