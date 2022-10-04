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
            return result = "You lose! Paper beats rock.";
            computerScore++;
        } else if (computerSelection === "scissors") {
            return result = "You win! Rock beats scissors";
            playerScore++;
        } else {
            return result = "Tie! Rocks make friends!";
            playerScore++;
            computerScore++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return result = "You win! Paper beats rock.";
            playerScore++;
        } else if (computerSelection === "scissors") {
            return result = "You lose! Scissors beat paper.";
            computerScore++;
        } else {
            return result = "Tie! Papers make friends!";
            playerScore++;
            computerScore++;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return result = "You lose! Rock beats scissors.";
            computerScore++;
        } else if (computerSelection === "paper") {
            return result = "You win! Scissors beat paper.";
            playerScore++;
        } else {
            return result = "Tie! Scissors make friends!";
            playerScore++;
            computerScore++;
        }
    } else {
        return result = "What kind of move is that?!? Invalid! INVALID!!! Game's over, you fool!";
        playerScore = 0;
        computerScore = 1000000000;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Make your move.").toLowerCase();
        let computerSelection = getComputerChoice();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            playRound(playerSelection, computerSelection);
            console.log(result);
            console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}.`);
        } else {
            playRound(playerSelection, computerSelection);
            console.log(result);
            console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}.`);
            break;
        }
    }
    if (playerScore < computerScore) {
        console.log("Dang! Computer recks you!");
    } else if (playerScore > computerScore) {
        console.log("Whoa! You reck computer!");
    } else {
        console.log("Draw!");
    }
}

game();