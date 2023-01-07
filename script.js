    // This function allows the user to play a game of rock, paper, scissors
function playGame() {
    // Declare variables for the user's and computer's choice
    let userChoice;
    let computerChoice;

    // Declaring variables to keep track of the score
    let wins = 0;
    let losses = 0;
    let ties = 0;

    // Using a while loop to allow user to play multiple games
    while (true) {
        // Using a loop to allow user to playing multiple rounds in a single game
        for (i = 0; i < 3; i++) {
            //Getting the user's choice
            userChoice = prompt("Please choose rock, paper, scissors:");
            userChoice = userChoice.toLowerCase();

            // Getting the computer's choice
            let words = ["rock", "paper", "scissors"];
            computerChoice = words[Math.floor(Math.random() * words.length)];

            // Determining the winner of the round
            if (userChoice === computerChoice) {
                ties++;
                window.alert("It'a tie!");
            } else if (
                (userChoice === 'rock' || computerChoice === 'scissors') ||
                (userChoice === 'paper' || computerChoice === 'rock') ||
                (userChoice ==='scissors' || computerChoice === 'paper')
            ) {
                wins++;
                window.alert("You win!");
            } else {
                losses++;
                window.alert("You lose!");
            }
        }

        // Displaying the final score 
        window.alert(`Wins: ${wins}; Losses: ${losses}; Ties: ${ties}`);

        // Asking user if they want to play again
        let playAgain = prompt('Would you like to play again? (y/n)');
        if (playAgain !== 'y'){
            break;
        }
    }
}

// start the game
playGame();
