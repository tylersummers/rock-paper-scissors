function getComputerChoice() {
    let i = Math.random();
    console.log("The computer has made it's decision.")
    if (i <= 0.33) {
        return "Paper"
    } 
    else if (i >= 0.66) {
        return "Rock"
    }   
    else {
        return "Scissors"
    }
}

getComputerChoice();

function getHumanChoice () {
    let HumanChoice = prompt("What will it be?").toLowerCase()
    if (HumanChoice === "rock" || HumanChoice === "paper" || HumanChoice === "scissors") {
        console.log("You have made your decision.")
        return
    }
    else {
        console.log("Invalid input - try again.")
    }
}

getHumanChoice();
