const rpcArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let randomAnswer = Math.floor(Math.random() * rpcArray.length);
    return rpcArray[randomAnswer];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a draw! Lets play again!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats rock!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats scissors!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors cuts paper!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock crushes scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats rock!";
    } else {
        return "You Lose! Scissors cuts paper!";
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("Enter rock, paper or scissors");
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

game();
