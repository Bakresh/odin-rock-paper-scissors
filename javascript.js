let computerChoice;
let playerChoice;

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

function playRound(playerSelection, computerSelection) {
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter 'Rock', 'Paper', or 'Scissors'. Enter 'exit' to end the game.").toLowerCase();
        let computerSelection = getComputerChoice();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            playRound(playerSelection, computerSelection);
            if (playerStatus === "win") {
                playerScore++;
            } else if (playerStatus === "loss") {
                computerScore++;
            }
            console.log(result);
            console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}.`);
        } else if (playerSelection === "exit") {
            playRound(playerSelection, computerSelection);
            playerScore = -1;
            computerScore = -1;
            console.log(result);
            break;
        } else {
            playRound(playerSelection, computerSelection);
            console.log(result);
            i--;
        }
    }
    if (playerScore < computerScore) {
        console.log("Dang! Computer recks you!");
    } else if (playerScore > computerScore) {
        console.log("Whoa! You reck computer!");
    } else if (playerScore == -1 && computerScore == -1) {
        console.log("Reload the page if you want to prove that you're not a wimp.");
    } else {
        console.log("Draw!");
    }
}

game();