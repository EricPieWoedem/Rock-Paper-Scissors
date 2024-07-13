# Rock-Paper-Scissors

Write a function that returns rock, paper or scissors randomly.

Step 2: Write the logic to get the computer choice
Create a function named getComputerChoice.
Generate a random number between 0 and 1.
If the random number is between 0 and 1/3, return "rock".
If the random number is between 1/3 and 2/3, return "paper".
If the random number is between 2/3 and 1, return "scissors".

Step 3: Write the logic to get the human choice
Create a function named getHumanChoice.
Prompt the user to input their choice (rock, paper, or scissors).
Return the user's input.

Step 4: Declare the players' score variables
Declare humanScore and set it to 0.
Declare computerScore and set it to 0.

Step 5: Write the logic to play a single round
Create a function named playRound that takes humanChoice and computerChoice as parameters.
Convert humanChoice to lowercase to make it case-insensitive.
Compare humanChoice and computerChoice:
If humanChoice is "rock" and computerChoice is "scissors", increment humanScore and log "You win! Rock beats Scissors".
If humanChoice is "paper" and computerChoice is "rock", increment humanScore and log "You win! Paper beats Rock".
If humanChoice is "scissors" and computerChoice is "paper", increment humanScore and log "You win! Scissors beats Paper".
If humanChoice equals computerChoice, log "It's a draw!".
Otherwise, increment computerScore and log the appropriate losing message.

Step 6: Write the logic to play the entire game
Create a function named playGame.
Initialize humanScore and computerScore to 0.
Loop 5 times:
Get the human choice by calling getHumanChoice.
Get the computer choice by calling getComputerChoice.
Call playRound with the human and computer choices.
After 5 rounds, log the final scores.

Declare the overall winner based on the final scores.
