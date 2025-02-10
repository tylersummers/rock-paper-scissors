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

function getHumanChoice() {
    return new Promise((resolve) => {
        document.querySelector("#rock-btn").onclick = () => resolve("rock");
        document.querySelector("#paper-btn").onclick = () => resolve("paper");
        document.querySelector("#scissors-btn").onclick = () => resolve("scissors");
    });
}

// Play Game

async function playGame() {

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
        const humanSelection = await getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    }

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

playGame();