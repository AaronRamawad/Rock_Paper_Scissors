let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let userChoice = prompt("Rock?, Paper?, or Scissors?");

    if (userChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if (userChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (userChoice.toLowerCase() === "scissors") {
        return "Scissors";
    } else {
        console.log("Not a Proper Response");
        getHumanChoice();
    }
}


function playGame() {
    let humanChoice;
    let computerChoice;

    let i = 0;
    while (i < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        i += 1;
    }

    if (humanScore > computerScore) {
        console.log("You beat the Computer");
    } else if (computerScore > humanScore) {
        console.log("You lost to the Computer")
    } else {
        console.log("You tied with the Computer");
    }

    console.log(`Score: ${humanScore} - ${computerScore}`);
}

playGame();

    