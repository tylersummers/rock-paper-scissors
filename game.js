function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    console.log("The computer has made it's decision.")

    if (computerChoice < 1) {
        return "paper"
    } 
    else if (computerChoice < 2) {
        return "rock"
    }   
    else {
        return "scissors"
    }
}

function getHumanChoice () {

    while (true) {
        let humanChoice = prompt("Welcome to Paper Scissors Rock. What will it be?").toLowerCase()

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            console.log("You have made your decision.")
            return humanChoice

        } else {
            console.log("Invalid input - try again.")
        }
    }
}

// Play five rounds

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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    }

    if (i = 5) {
        console.log("Game over! Computer score: " + computerScore + " Your score: " + humanScore)

        if (computerScore === humanScore) {
            console.log("The game is a tie!")
        }

        else if (computerScore > humanScore) {
            console.log("You lose the game!")
        }

        else
        console.log("You win the game!")
    }
}

playGame();