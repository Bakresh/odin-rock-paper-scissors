let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const player = document.querySelector(".player-score");
const computer = document.querySelector(".computer-score");

const playerPoint = document.createElement("div");
const computerPoint = document.createElement("div");
playerPoint.textContent = playerScore;
computerPoint.textContent = computerScore;
player.appendChild(playerPoint);
computer.appendChild(computerPoint);


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
            computerScore++;
            computerPoint.textContent = computerScore;
            return computerScore;
        } else if (computerSelection === "scissors") {
            playerScore++;
            playerPoint.textContent = playerScore;
            return playerScore;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            playerPoint.textContent = playerScore;
            return playerScore;
        } else if (computerSelection === "scissors") {
            computerScore++;
            computerPoint.textContent = computerScore;
            return computerScore;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            computerPoint.textContent = computerScore;
            return computerScore;
        } else if (computerSelection === "paper") {
            playerScore++;
            playerPoint.textContent = playerScore;
            return playerScore;
        }
    }
}

function endGame() {
    rock.removeEventListener('click', () => {
        const playerSelection = "rock";
        playRound(playerSelection);
    });
    paper.removeEventListener('click', () => {
        const playerSelection = "paper";
        playRound(playerSelection);
    });
    scissors.removeEventListener('click', () => {
        const playerSelection = "scissors";
        playRound(playerSelection);
    });
}