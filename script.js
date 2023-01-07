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
            userChoice = prompt("Please choose rock, paper, scissors:");
            userChoice = userChoice.toLowerCase();

            // Getting the computer's choice
            let words = ["rock", "paper", "scissors"];
            computerChoice = words[Math.floor(Math.random() * words.length)];

            
        }
    }

}
