//Global variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Get a random number using Random function
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    // if number is 1 , then rock
    if (computerChoice === 1) {
        return "rock";
    }
    // if number is 2 then paper
    else if (computerChoice === 2) {
        return "paper";
    }
    // otherwise number 3 return scissors
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice;

    while (true) {
        humanChoice = parseInt(prompt("Enter a number between 1 and 3 inclusive:"));

        // Check if the input is a valid number between 1 and 3
        if (!isNaN(humanChoice) && humanChoice >= 1 && humanChoice <= 3) {
            break; // Valid input, exit the loop
        } else {
            alert("Invalid input. Please enter a number between 1 and 3.");
        }
    }

    // Map the number to the corresponding choice
    if (humanChoice === 1) {
        return "rock";
    } else if (humanChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(humanChoice, computerChoice) {
    // Log both choices
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    // Determine the outcome of the round
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    }
    // Case where human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        // Increment human score
        humanScore++;
        console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
    } else {
        // Computer wins
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
    }

    // Log the current scores
    console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
    // Reset scores at the start of the game
    humanScore = 0;
    computerScore = 0;

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Announce the final winner
    console.log("\nFinal Results:");
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game! Better luck next time.");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();
