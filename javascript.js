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
            return "You lose! Paper beats rock.";
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats scissors";
        } else {
            return "Tie! Rocks make friends!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock.";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beat paper.";
        } else {
            return "Tie! Papers make friends!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else if (computerSelection === "paper") {
            return "You win! Scissors beat paper.";
        } else {
            return "Tie! Scissors make friends!";
        }
    } else {
        return "What kind of move is that?!? Invalid! INVALID!!! Game's over, you fool!";
    }
}

