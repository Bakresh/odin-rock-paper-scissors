let computerChoice;
let playerChoice;
let playerScore = 0
let computerScore = 0
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => {
    const playerSelection = "rock";
    playRound(playerSelection);
});
paper.addEventListener('click', () => {
    const playerSelection = "paper";
    playRound(playerSelection);
});
scissors.addEventListener('click', () => {
    const playerSelection = "scissors";
    playRound(playerSelection);
});

function getComputerChoice() {
    const computerRandomChoice = Math.floor(Math.random() * 3);
    if (computerRandomChoice === 0) {
        return computerChoice = "rock";
    } else if (computerRandomChoice === 1) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            playerStatus = "loss";
            result = "You lose! Paper beats rock.";
            return [playerStatus, result];
        } else if (computerSelection === "scissors") {
            playerStatus = "win";
            result = "You win! Rock beats scissors";
            return [playerStatus, result];
        } else {
            playerStatus = "tie";
            result = "Tie! Rocks make friends!";
            return [playerStatus, result];
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerStatus = "win";
            result = "You win! Paper beats rock.";
            return [playerStatus, result];
        } else if (computerSelection === "scissors") {
            playerStatus = "loss";
            result = "You lose! Scissors beat paper.";
            return [playerStatus, result];
        } else {
            playerStatus = "tie";
            result = "Tie! Papers make friends!";
            return [playerStatus, result];
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            playerStatus = "loss";
            result = "You lose! Rock beats scissors.";
            return [playerStatus, result];
        } else if (computerSelection === "paper") {
            playerStatus = "win";
            result = "You win! Scissors beat paper.";
            return [playerStatus, result];
        } else {
            playerStatus = "tie";
            result = "Tie! Scissors make friends!";
            return [playerStatus, result];
        }
    } else if (playerSelection === "exit") {
        return result = "Game terminated.....WIMP!";
    } else {
        return result = "Invalid move. Please try again.";
    }
}