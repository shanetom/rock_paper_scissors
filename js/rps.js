const rpcArray = ['rock', 'paper', 'scissors'];

let playerSelection;
let computerSelection;

let result;

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
    
        if (gameOver(playerScore, computerScore)) {
            if (playerScore === 5) {
                result = "Congratulations! You win!";
            } else {
                result = "You Lose! Computer is the winner!";
            }

            playerScore = 0;
            computerScore = 0;
        }

        document.querySelector('.playerScore .playerValue').innerHTML = playerScore;
        document.querySelector('.computerScore .computerValue').innerHTML = computerScore;
        document.querySelector('.result .gameResult').innerHTML = result;
    });
});

function computerPlay() {
    let randomAnswer = Math.floor(Math.random() * rpcArray.length);
    return rpcArray[randomAnswer];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a draw! Lets play again!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return "You Lose! Paper beats rock!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return "You Win! Rock beats scissors!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return "You Win! Scissors cuts paper!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return "You Lose! Rock crushes scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return "You Win! Paper beats rock!";
    } else {
        computerScore++;
        return "You Lose! Scissors cuts paper!";
    }
}

function gameOver(playerScore, computerScore) {
    return playerScore === 5 || computerScore === 5;
}


