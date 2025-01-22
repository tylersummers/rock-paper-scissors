// Get Computer Choice and Human Choice
function getComputerChoice() {
    let computerChoice = Math.random();
    console.log("The computer has made it's decision.")
    if (computerChoice < 0.33) {
        return "Paper"
    } 
    else if (computerChoice < 0.66) {
        return "Rock"
    }   
    else {
        return "Scissors"
    }
}

getComputerChoice();

function getHumanChoice () {
    let humanChoice = prompt("What will it be?").toLowerCase()
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        console.log("You have made your decision.")
        return HumanChoice
    }
    else {
        console.log("Invalid input - try again.")
    }
}

getHumanChoice();

// Set initial score
let computerScore = 0
let humanScore = 0

function playRound (computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!")
    }

    else if (computerChoice === "scissors" && humanChoice === "rock" || computerChoice === "rock" && humanChoice === "paper" || computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You win! Nice.")
        humanScore++
    }

    else {
        console.log("The computer wins! Unlucky.")
        computerScore++
    }
}

playRound(computerChoice, humanChoice);