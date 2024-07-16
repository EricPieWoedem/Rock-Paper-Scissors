console.log("Hello, World!");

function getComputerChoice() {
    let randomNum = Math.random();
    
    if (randomNum < 1/3){
        return "rock";
    } else if (randomNum < 2/3){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Enter your choice: rock, paper, or scissors").trim().toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
        return userInput;
    } else {
        console.log("Invalid choice, please enter rock, paper, or scissors.");
        return getHumanChoice(); // Prompt again until a valid choice is made
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        // console.log(`Human Choice: ${getHumanChoice()}, Computer Choice: ${getComputerChoice()}`);
    if ((humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw");
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}
 
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (i=0; i<5; i++) {
        //  humanSelection;
        //  computerSelection;
        //  playRound(humanSelection, computerSelection);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
         console.log("You won the game!");
    }
    else if (humanScore < computerScore ) {
         console.log("You lost the game!");
    
    }
    else {
         console.log("The game is a draw!");
    }

 }

playGame();


