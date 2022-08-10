// generate random number between min/max inclusively
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// return rock/paper/scisssors depending on number
function getComputerChoice() {
const compChoice = getRndInteger(1,3);
if (compChoice === 1) {
    return "rock";
}
else if (compChoice === 2) {
    return "paper";
}
else {
    return "scissors";
}

}

// play one round of rps
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    if (player === computerSelection) {
        return "It's a tie!";
    }
    if (player === "rock") {
        if (computerSelection === "paper") {
            return "Paper covers rock! The computer wins this round...";
        }
        else if (computerSelection === "scissors") {
             return "Rock beats scissors! The player wins this round...";
        }
    }
    if (player === "paper") {
        if (computerSelection === "rock") {
            return "Paper covers rock! The player wins this round...";
        }
        else if (computerSelection === "scissors") {
            return "Scissors cuts paper! The computer wins this round...";
        }
    }
    if (player === "scissors") {
        if (computerSelection === "rock") {
            return "Rock breaks scissors! The computer wins this round...";
        }
        else if (computerSelection === "paper") {
            return "Scissors cuts paper! The player wins this round...";
        }
    }

    
    
}
// play 5 rounds of rps and output results of each round to console
function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?");
        computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        if (round.search("player") !== -1) {
            playerScore++;
            console.log(`Player: ${playerScore} Computer: ${compScore}`);
        }
        else if (round.search("computer") !== -1){
            compScore++
            console.log(`Player: ${playerScore} Computer: ${compScore}`);
        }
        else if (round.search("tie") !== -1) {
            console.log(`A tie! Player: ${playerScore} Computer: ${compScore}`);

        }
    }
    return `Final Results: \nPlayer: ${playerScore} \nComputer: ${compScore}`;
}

let playerSelection;
let computerSelection;
console.log(game());