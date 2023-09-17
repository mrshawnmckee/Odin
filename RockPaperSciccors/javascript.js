function getComputerChoice(){
    return Math.floor(Math.random() * 10)
}

let computerChoice = getComputerChoice()

let computerSelection
if (computerChoice <4) {
    computerSelection = "rock"
} else if (computerChoice >=4 && computerChoice<8) {
    computerSelection = "paper"
} else {
    computerSelection = "scissors"
}

playerSelection = prompt("Choose Rock paper or Scissors")
console.log(playerSelection)
console.log(`Computer chose ${computerSelection}`)


if (playerSelection === "paper"){
    if (computerSelection ==="paper"){
        console.log("You have tied")
    } else if (computerSelection === "rock"){
        console.log("You win")
    } else if (computerSelection === "scissors") {
        console.log("Computer Wins")
    }
} else if (playerSelection === "rock") {
    if (computerSelection ==="paper"){
        console.log("Computer Wins")
    } else if (computerSelection === "rock"){
        console.log("You Have Tied")
    } else {
        console.log("You Win")
    }
} else if (playerSelection === "scissors"){
    if (computerSelection ==="paper"){
        console.log("You win")
    } else if (computerSelection === "rock"){
        console.log("Computer WIns")
    } else {
        console.log("You have tied")
    }
}
