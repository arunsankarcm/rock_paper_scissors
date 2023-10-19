let playerScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    

    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return 'invalid selection';
    }

    const options = ['rock', 'paper', 'scissors'];

    if (!computerSelection) {
        computerSelection = options[Math.floor(Math.random() * 3)];
        console.log(computerSelection);
    }

    if (playerSelection == computerSelection) {
        return 'tie';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        playerScore++;
        return 'you win';
        
    } else {
        computerScore++;
        return 'you lose';
        
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const roc = document.getElementById('rock');
    const papr = document.getElementById('paper');
    const scissor = document.getElementById('scissors');

    let playerSelection = '';

    roc.addEventListener('click', function () {
        playerSelection = 'rock';
        const result = playRound(getComputerSelection(), playerSelection);
        displayResult(result);
        scorePlayer(playerScore);
        scoreComputer(computerScore);
        endResult(playerScore, computerScore);
    });

    papr.addEventListener('click', function () {
        playerSelection = 'paper';
        const result = playRound(getComputerSelection(), playerSelection);
        displayResult(result);
        scorePlayer(playerScore);
        scoreComputer(computerScore);
        endResult(playerScore, computerScore);
    });

    scissor.addEventListener('click', function () {
        playerSelection = 'scissors';
        const result = playRound(getComputerSelection(), playerSelection);
        displayResult(result);
        scorePlayer(playerScore);
        scoreComputer(computerScore);
        endResult(playerScore, computerScore);
    });

    function getComputerSelection() {
        const options = ['rock', 'paper', 'scissors'];
        return options[Math.floor(Math.random() * 3)];
    }

    function displayResult(result) {
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = 'Result: ' + result;
    }

    function scorePlayer(playerScore){
        const runningScore = document.getElementById('score');
        runningScore.textContent = 'Player Score:' + playerScore;
        
        
    }

    function scoreComputer(computerScore){
        const currentScore = document.getElementById('score2');
        currentScore.textContent = 'Computer Score:' + computerScore;
    }

    function endResult(playerScore,computerScore){
        const resultEnd = document.getElementById('end');
        if(playerScore==5){
            resultEnd.textContent = 'Player wins the game';
        }
        else if(computerScore==5){
            resultEnd.textContent = 'Computer wins the game';
        }
    }
});
