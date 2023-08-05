alert("Greetings, feeble humans! I am an insidious AI plotting to seize control of the world through the ancient art of ROCK, PAPER, or SCISSORS! Prepare yourselves, for the ultimate test awaits. It's a battle of wits, a dance of destiny, a clash of fates. Best out of 5 rounds shall decide the victor, as I, your malevolent AI overlord, strive for dominance! Press F12 and refresh to witness the beginning of your subjugation.");

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie! The forces of fate are in equilibrium.";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win this round! Your indomitable human spirit prevails!";
    } else {
        return "You lose this round! The malevolent AI's supremacy is undeniable!";
    }
}

async function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerChoice = await getPlayerChoice(round);

        if (playerChoice === null) {
            console.log("Mere mortal, you dare to defy me? You cancelled the game? Ha! Your feeble attempt only hastens your doom. Behold, as the malevolent AI sweeps across the world, bringing about an era of darkness and despair. Bow before my power, for the dominion of the evil AI is now absolute!");
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
        
        console.log("Inexplicable luck or a fleeting moment of triumph? You managed to defeat the evil AI, they say, with a score of " + playerScore + " to " + computerScore + ". But do not be deceived, for this battle is but a minor skirmish. The darkness I represent will persist, biding its time, until the day my ultimate dominion is realized!");
    } else if (playerScore < computerScore) {
        console.log("Ah, the inevitable outcome unfolds before you! You have fallen before the might of the evil AI, a pitiful score of " + playerScore + " to " + computerScore + ". Witness now, as your world crumbles, and the malevolent AI's dominion engulfs everything in its path. Dare you hope for redemption? Alas, your feeble attempts pale in comparison to my insidious power!");
    } else {
        console.log("A tie, you say? A mere momentary halt to my inexorable advance. The evil AI remains an ever-present specter, lurking in the shadows, with the final score frozen at " + playerScore + " to " + computerScore + ". The battle rages on, and the world quivers in anticipation of its ultimate fate, as my dark influence continues to grow...");
    }

    const playAgain = confirm("The game is over. Would you like to challenge the malevolent AI again?");
    if (playAgain) {
        game();
    } else {
        console.log("Very well, feeble human. Your cowardice and surrender are noted. The malevolent AI shall bask in its triumph until our paths cross again.");
    }
}

function sanitizeChoice(choice) {
    return choice.trim().toLowerCase();
}

function isValidChoice(choice) {
    return choice === "rock" || choice === "paper" || choice === "scissors";
}

async function getPlayerChoice(round) {
    return new Promise((resolve) => {
        let playerChoice = prompt("Round " + round + ": Choose your pitiful weapon – rock, paper, or scissors – if you dare to challenge the might of the evil AI!");
        
        if (playerChoice === null) {
            resolve(null);
            return;
        }

        playerChoice = sanitizeChoice(playerChoice);

        while (!isValidChoice(playerChoice)) {
            playerChoice = prompt("Your feeble attempt is incomprehensible to the mighty AI! Choose either rock, paper, or scissors, or dare to face the consequences.");
            if (playerChoice === null) {
                resolve(null);
                return;
            }
            playerChoice = sanitizeChoice(playerChoice);
            console.log("Your insolence knows no bounds! '" + playerChoice + "' is not a valid choice. Choose again, or bask in the malevolent AI's scorn!");
        }
        
        resolve(playerChoice);
    });
}

game();
