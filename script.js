function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie! You and the evil AI both chose " + playerSelection + ".";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You win this round! " + playerSelection + " beats the evil AI's " + computerSelection + ".";
    } else {
        return "You lose! The evil AI's " + computerSelection + " beats your " + playerSelection + ".";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("I am a bad AI that wants to dominate the world through the game of ROCK, PAPER or SCISSORS! Best out of 5 rounds wins.");
    
    for (let round = 1; round <= 5; round++) {
        const playerChoice = prompt("Round " + round + ": Choose rock, paper, or scissors!");
        
        if (playerChoice === null) {
            console.log("You cancelled the game. The evil AI conquered the world!");
            return;
        }
        
        const computerChoice = computerPlay();

        const result = playRound(playerChoice, computerChoice);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You beat the evil AI with a score of " + playerScore + " to " + computerScore + ".");
    } else if (playerScore < computerScore) {
        console.log("You lost, the evil AI conquered the world! " + playerScore + " to " + computerScore + ". Better luck next time!");
    } else {
        console.log("It's a tie! The evil AI is still lurking... The final score is " + playerScore + " to " + computerScore + ".");
    }
}

game();