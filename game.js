// Get Computer Choice and Human Choice
function getComputerChoice() {
    let computerChoice = Math.random();
    console.log("The computer has made it's decision.")
    if (computerChoice < 0.33) {
        return "paper"
    } 
    else if (computerChoice < 0.66) {
        return "rock"
    }   
    else {
        return "scissors"
    }
}

function getHumanChoice () {
    while (true) {
        let humanChoice = prompt("What will it be?").toLowerCase()
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            console.log("You have made your decision.")
            return humanChoice
        } else {
            console.log("Invalid input - try again.")
        }
    }
}


function playGame() {

    let computerScore = 0
    let humanScore = 0

    function playRound (computerChoice, humanChoice) {
        if (computerChoice === humanChoice) {
            console.log("It's a tie!")
        }
    
        else if (computerChoice === "scissors" && humanChoice === "rock" || computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors") {
            console.log("You win! Nice.")
            humanScore++
        }
    
        else {
            console.log("The computer wins! Unlucky.")
            computerScore++
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    }

}

playGame();