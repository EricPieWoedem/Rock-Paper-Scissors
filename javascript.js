console.log("Hello,World!")

function getComputerChoice() {
    let randomNum = Math.random();
    
    if (randomNum < 1/3){
        return ("rock");
    }
    else if (randomNum < 2/3){
        return("paper");
    }
    else {
        return ("scissors");
    }
}

function getHumanChoice() {
    let userInput = prompt("Enter your choice");
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors"){
        return(userInput);
    }
    else {
        return ("wrong input");
    }
} 

let humanScore = 0;
let computerScore = 0;

let win = "You win!";
let draw = "It's a draw!";
let lose = "You lose";

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice,computerChoice) {
    for ( let i = 0; i <= 5, i++;) {
        if (humanSelection == "paper" && computerSelection == "rock") {
            return(win);
            humanScore++;
        }
        else if(humanSelection == "rock" && computerSelection == "scissors") {
            return(win);
            humanScore++;

        }
        else if(humanSelection == "scissors" && computerSelection == "paper" ) {
            return(win);
            humanScore++;
        }

        else if(humanChoice == computerChoice) {
            return(draw);
        }

        else {
            return(lose);
            computerScore++;
        }
    }
}


playRound(humanSelection,computerSelection);



