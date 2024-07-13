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
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors{"){
        return(userInput);
    }
    else {
        return ("wrong input");
    }
} 

