let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const totalRounds = 5;

document.querySelector('#rockBtn').addEventListener('click', () => playRound('rock'));
document.querySelector('#paperBtn').addEventListener('click', () => playRound('paper'));
document.querySelector('#scissorsBtn').addEventListener('click', () => playRound('scissors'));

document.querySelector('#resetBtn').addEventListener('click', resetGame);

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        // Add the 'clicked' class to the button
        button.classList.add('clicked');

        // Remove the 'clicked' class after the animation ends
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300); // Match the duration of the animation
    });
});


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    if (roundCount >= totalRounds) {
        return;
    }

    const computerSelection = getComputerChoice();
    let resultMessage = '';

    if ((playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        humanScore++;
        resultMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        resultMessage = "It's a draw!";
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    roundCount++;
    updateResults(resultMessage);
    updateScores();

    if (roundCount === totalRounds) {
        announceWinner();
    }
}

function updateResults(message) {
    const resultsDiv = document.querySelector('#result');
    resultsDiv.textContent = message;
}

function updateScores() {
    const resultsDiv = document.querySelector('#result');
    resultsDiv.innerHTML += `<p>Scores - You: ${humanScore}, AI: ${computerScore}</p>`;
}

function announceWinner() {
    const resultsDiv = document.querySelector('#result');
    if (humanScore > computerScore) {
        resultsDiv.innerHTML += `<p>You won the game!</p>`;
    } else if (humanScore < computerScore) {
        resultsDiv.innerHTML += `<p>You lost the game!</p>`;
    } else {
        resultsDiv.innerHTML += `<p>The game is a draw!</p>`;
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    updateResults("Pick Rock, Paper, or Scissors to start the game!");
}

window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer');
    
    // Check if the user has scrolled to the bottom
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Add the 'visible' class to trigger the animation
      footer.classList.add('visible');
    } else {
      // Remove the 'visible' class when the user scrolls up
      footer.classList.remove('visible');
    }
  });
  