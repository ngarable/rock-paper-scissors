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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const results = document.getElementById('results');
    const score = document.getElementById('score');

   
    let resultMessage = `Human chose: ${humanChoice}<br>Computer chose: ${computerChoice}<br>`;

    if (humanChoice === computerChoice) {
        resultMessage += `It's a tie! Both chose ${humanChoice}.<br>`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        resultMessage += `Human wins! ${humanChoice} beats ${computerChoice}<br>`;
    } else {
        computerScore++;
        resultMessage += `Computer wins! ${computerChoice} beats ${humanChoice}<br>`;
    }

    // Update the DOM with the new results
    results.innerHTML = resultMessage; // Use innerHTML to render HTML correctly
    score.innerHTML = `Score - Human: ${humanScore}, Computer: ${computerScore}`; // Use innerHTML to include potential future HTML tags

    // Check if the game is over
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "Human" : "Computer";
        results.innerHTML += `Game over! ${winner} wins the game!<br>`;
        humanScore = 0; // Reset scores
        computerScore = 0;
    }
}

// results.innerHTML.style.color = 'red';

document.getElementById('rock').addEventListener('click', function() { playRound('rock'); });
document.getElementById('paper').addEventListener('click', function() { playRound('paper'); });
document.getElementById('scissors').addEventListener('click', function() { playRound('scissors'); });

// Assuming 'game-buttons' is an ID; if it's a class, use '.game-buttons' instead
const gameButtons = document.querySelectorAll('#game-buttons button'); 
const gameButtonsContainer = document.querySelector('#game-buttons'); 

gameButtonsContainer.style.display = 'flex'; 
gameButtonsContainer.style.justifyContent = 'space-evenly';

// Apply styles to each button in the NodeList
gameButtons.forEach(button => {
    button.style.color = 'blue';
    button.style.padding = '10px'; 
    button.style.margin = '10px';  
    button.style.backgroundColor = 'green';
    button.style.height = '150px';
    button.style.width = '250px';
    // button.style.display = 'flex';
});





//Old getHumanChoice()
// function getHumanChoice() {
//     let humanChoice;

//     while (true) {
//         humanChoice = parseInt(prompt("Enter a number between 1 and 3 inclusive:"));

//         // Check if the input is a valid number between 1 and 3
//         if (!isNaN(humanChoice) && humanChoice >= 1 && humanChoice <= 3) {
//             break; // Valid input, exit the loop
//         } else {
//             alert("Invalid input. Please enter a number between 1 and 3.");
//         }
//     }

//     // Map the number to the corresponding choice
//     if (humanChoice === 1) {
//         return "rock";
//     } else if (humanChoice === 2) {
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }


// function playRound(humanChoice, computerChoice) {
//     // Log both choices
//     console.log(`Human chose: ${humanChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);

//     // Determine the outcome of the round
//     if (humanChoice === computerChoice) {
//         console.log(`It's a tie! Both chose ${humanChoice}.`);
//     }
//     // Case where human wins
//     else if (
//         (humanChoice === "rock" && computerChoice === "scissors") ||
//         (humanChoice === "scissors" && computerChoice === "paper") ||
//         (humanChoice === "paper" && computerChoice === "rock")
//     ) {
//         // Increment human score
//         humanScore++;
//         console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
//     } else {
//         // Computer wins
//         computerScore++;
//         console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
//     }

//     // Log the current scores
//     console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
// }

// function playRound(humanChoice)
// {
//     const computerChoice = getComputerChoice();
//     const resultElement = document.getElementById('results');
//     let reultMessage = '';

//     resultMessage += `Human chose: ${humanChoice} <br>`;
//     resultMessage += `Computer chose: ${computerChoice} <br>`;

//     if (humanChoice === computerChoice) {
//                 resultMessage += `It's a tie! Both chose ${humanChoice}. <br>`;
//             }
//             // Case where human wins
//             else if (
//                 (humanChoice === "rock" && computerChoice === "scissors") ||
//                 (humanChoice === "scissors" && computerChoice === "paper") ||
//                 (humanChoice === "paper" && computerChoice === "rock")
//             ) {
//                 // Increment human score
//                 humanScore++;
//                 resultMessage += `Human wins! ${humanChoice} beats ${computerChoice} <br>`;
//             } else {
//                 // Computer wins
//                 computerScore++;
//                 resultMessage += `Computer wins! ${computerChoice} beats ${humanChoice} <br> `;
//             }

//             resultMessage += `Scores -> Human: ${humanScore}, Computer: ${computerScore} <br>`;
//             resultElement.innerHTML = resultMessage;


// }



// function playGame() {
//     // Reset scores at the start of the game
//     humanScore = 0;
//     computerScore = 0;

//     // Play 5 rounds --Removing this logic
//     // for (let i = 1; i <= 5; i++) {
//     //     console.log(`\nRound ${i}`);
//     //     const humanSelection = getHumanChoice();
//     //     const computerSelection = getComputerChoice();
//     //     playRound(humanSelection, computerSelection);
//     // }

//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);

//     // Announce the final winner
    // console.log("\nFinal Results:");
//     console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
//     if (humanScore > computerScore) {
//         console.log("Congratulations! You won the game!");
//     } else if (computerScore > humanScore) {
//         console.log("You lost the game! Better luck next time.");
//     } else {
//         console.log("It's a tie game!");
//     }
// }




// document.querySelector('rock').addEventListener('click', function() {
//     playRound('rock');
// });

// document.querySelector('paper').addEventListener('click', function() {
//     playRound('paper');
// });

// document.querySelector('scissors').addEventListener('click', function() {
//     playRound('scissors');
// });

// Start the game
// playGame();

//Global variables
// let humanScore = 0;
// let computerScore = 0;
