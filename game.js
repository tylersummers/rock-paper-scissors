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

// Run the Game

async function playGame() {

    let computerScore = 0
    let humanScore = 0

    // Scoreboard

    const scoreDiv = document.createElement("div")
    scoreDiv.textContent = "Your Score: " + humanScore + " || Computer Score: " + computerScore
    scoreDiv.style.margin = "15px"
    document.body.appendChild(scoreDiv)

    const resultDiv = document.createElement("div")
    resultDiv.textContent = "Let's rock... or paper... or scissor."
    resultDiv.style.margin = "15px"
    document.body.insertBefore(resultDiv, scoreDiv)

    function playRound (computerChoice, humanChoice, roundNumber) {

        if (computerChoice === humanChoice) {
            resultDiv.textContent = "Round " + roundNumber + " is a tie!"
        }
    
        else if (computerChoice === "scissors" && humanChoice === "rock" || computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors") {
            resultDiv.textContent = "You win round " + roundNumber + ", nice!"
            humanScore++
        }
    
        else {
            resultDiv.textContent = "The computer wins round " + roundNumber + ", oh no!"
            computerScore++
        }

        scoreDiv.textContent = "Your Score: " + humanScore + " || Computer Score: " + computerScore

    }


    for (let i = 0; i < 5; i++) {
        const humanSelection = await getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection, i + 1);
    }

        if (computerScore === humanScore) {
            resultDiv.textContent = "Game over! It's a tie."
        }

        else if (computerScore > humanScore) {
            resultDiv.textContent = "Game over! You lose!"
        }

        else
        resultDiv.textContent = "Game over! You win!"
    }

playGame();