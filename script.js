let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const humanScoreBox = document.querySelector('.human-score');
const computerScoreBox = document.querySelector('.computer-score');
const computerChoiceBox = document.querySelector('.opponent-choice');

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            humanScore += 1;
            console.log("You win, Scissors beats Paper");
        } else if (computerChoice === "Rock") {
            computerScore += 1;
            console.log("You lose, Rock beats Paper");
        } else {
            console.log("It was a tie")
        }
    }

    if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore += 1;
            console.log("You win, Paper beats Rock");
        } else if (computerChoice === "Scissors") {
            computerScore += 1;
            console.log("You lose, Scissors beats Paper");
        } else {
            console.log("It was a tie")
        }
    }
    
    if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            humanScore += 1;
            console.log("You win, Rock beats Scissors");
        } else if (computerChoice === "Paper") {
            computerScore += 1;
            console.log("You lose, Paper beats Rocks");
        } else {
            console.log("It was a tie")
        }
    }   
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function playGame() {

    computerChoice = getComputerChoice();
    updateOpponentChoice(computerChoice);
    playRound(humanChoice, computerChoice);
    updateScore();
    
    if (humanScore === 5) {
        console.log("You beat the Computer!!!");
    }
    if (computerScore === 5) {
        console.log("You lost to the Computer!!!");
    } else {
        console.log(`Score: ${humanScore} - ${computerScore}`);
    }
}

function updateOpponentChoice(computerChoice) {
    computerChoiceBox.textContent = computerChoice;
}

function updateScore() {
    humanScoreBox.textContent = humanScore;
    computerScoreBox.textContent = computerScore;
}

rock.addEventListener('click', () => {
    humanChoice = "Rock";
    playGame();
});

paper.addEventListener('click', () => {
    humanChoice = "Paper";
    playGame();
});

scissors.addEventListener('click', () => {
    humanChoice = "Scissors";
    playGame();
});
    