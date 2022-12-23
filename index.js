// to grab your score container
const humanScore = document.querySelector('.playerPoints.playerScore');

// to grab computer's score container
const compScore1 = document.querySelector('.computerPoints.computerScore');

// to grab result container
const result = document.querySelector('.resultsContainer');



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

let playerScore = 0;
let compScore = 0;

// play one round of rps
function playRound(playerSelection, computerSelection) {
    //const player = playerSelection.toLowerCase();
    let drawPrompt = "Draw... Try again!";
    if (playerScore < 5 && compScore < 5) {
        if (playerSelection === computerSelection) {
            result.textContent = drawPrompt;
            //return "It's a tie!";
        }
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                compScore++;
                result.textContent = "Paper covers rock! The computer wins this round...";
                compScore1.textContent = compScore;
                //return "Paper covers rock! The computer wins this round...";
            }
            else if (computerSelection === "scissors") {
                playerScore++;
                result.textContent = "Rock beats scissors! The player wins this round...";
                humanScore.textContent = playerScore;
                 //return "Rock beats scissors! The player wins this round...";
            }
        }
        if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                playerScore++;
                result.textContent = "Paper covers rock! The player wins this round...";
                humanScore.textContent = playerScore;
                //return "Paper covers rock! The player wins this round...";
            }
            else if (computerSelection === "scissors") {
                compScore++;
                result.textContent = "Scissors cuts paper! The computer wins this round...";
                compScore1.textContent = compScore;
                //return "Scissors cuts paper! The computer wins this round...";
            }
        }
        if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                compScore++;
                result.textContent = "Rock breaks scissors! The computer wins this round...";
                compScore1.textContent = compScore;
                //return "Rock breaks scissors! The computer wins this round...";
            }
            else if (computerSelection === "paper") {
                playerScore++;
                result.textContent = "Scissors cuts paper! The player wins this round...";
                humanScore.textContent = playerScore;
                //return "Scissors cuts paper! The player wins this round...";
            }
        }
        console.log(playerScore, compScore);
    }

    if (playerScore == 5) {
        result.textContent = "You win";
        button.style.visibility = 'visible';
    } else if (compScore == 5) {
        result.textContent = "Computer wins";
        button.style.visibility = 'visible';
    }
        
    } 
    


const rock = document.querySelector('#btn1');
rock.addEventListener('click', () => {
playerSelection = 'rock';
computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
});

const paper = document.querySelector('#btn2');
paper.addEventListener('click', () => {
playerSelection = 'paper';
computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
});

const scissors = document.querySelector('#btn3');
scissors.addEventListener('click', () => {
playerSelection = 'scissors';
computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
});

// clicking button
const button = document.querySelector('.again');
button.addEventListener('click', () => {
    playerScore = 0;
    humanScore.textContent = playerScore;
    compScore = 0;
    compScore1.textContent = compScore;
    result.textContent = "";
    button.style.visibility = 'hidden';
})




/*
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
    if (playerScore > compScore) {
        console.log("You won! :-)");
    }
    else if (compScore > playerScore) {
        console.log("You lost! :'(");
    }
    else if (playerScore === compScore) {
        console.log("It's a draw!");
    }
    return `Final Results: \nPlayer: ${playerScore} \nComputer: ${compScore}`;
}*/

let playerSelection;
let computerSelection;
//console.log(game());