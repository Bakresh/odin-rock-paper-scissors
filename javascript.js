let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
const body = document.querySelector("body");
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


rock.addEventListener('click', rockCheck);
paper.addEventListener('click', paperCheck);
scissors.addEventListener('click', scissorsCheck);

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

function rockCheck() {
    const playerSelection = "rock";
    playRound(playerSelection);
    checkResult();
}

function paperCheck() {
    const playerSelection = "paper";
    playRound(playerSelection);
    checkResult();
}

function scissorsCheck() {
    const playerSelection = "scissors";
    playRound(playerSelection);
    checkResult();
}

function endGame() {
    rock.removeEventListener('click', rockCheck);
    paper.removeEventListener('click', paperCheck);
    scissors.removeEventListener('click', scissorsCheck);
}

function checkResult() {
    if (playerScore === 5) {
        const win = document.createElement("p");
        win.classList.add("result");
        win.textContent = "Congratulations! You beat computer! Reload this page to try again.";
        body.appendChild(win);
        endGame();
    } else if (computerScore === 5) {
        const loss = document.createElement("p");
        loss.classList.add("result");
        loss.textContent = "Oh, no! You lost against computer. Reload this page to try again.";
        body.appendChild(loss);
        endGame();
    }
}