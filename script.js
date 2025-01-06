//Global variables
humanScore = 0;
computerScore = 0;

function getComputerChoice(){
    //get a random number using Random function
    //convert the number into a whole number
    computerChoice = Math.floor(Math.random() * 3) + 1;
    
    //if number is 1 , then rock
    if (computerChoice === 1){
        return "rock";
    }
    //if number is 2 then paper
    else if(computerChoice === 2){
        return "paper";
    }
   //otherwise number 3 return scissors
   else{
    return "scissors";
   }
}

// console.log(getComputerChoice());

function getHumanChoice(){
    // Prompt the user for input
    let humanChoice = parseInt(prompt("Enter a number between 1 and 3 inclusive: "));

    // Validate input to ensure it's a number between 1 and 3
    if (isNaN(humanChoice) || humanChoice < 1 || humanChoice > 3) {
        alert("Invalid input. Please enter a number between 1 and 3.");
        return getHumanChoice(); // Recursively ask again for valid input
    }

    //if number is 1 , then rock
    if (humanChoice === 1){
        return "rock";
    }
    //if number is 2 then paper
    else if(humanChoice === 2){
        return "paper";
    }
    //otherwise number 3 return scissors
    else{
    return "scissors";
    }

}
//console.log(getHumanChoice());


function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        console.log(`It's a  tie! Both chose ${humanChoice}.`)
    }
    //Case where human wins
    else if ((humanChoice === 1 && computerChoice === 3) ||
            (humanChoice === 3 && computerChoice === 2) ||
            (humanChoice === 2 && computerChoice === 1))
    {
        //increment human score
        humanScore ++;
        console.log(`Human wins! ${humanChoice} beat ${computerChoice}`);
    }

    else{
        //Computer wins
        computerScore ++;
        console.log(`Computer wins! ${computerChoice} beat ${humanChoice}`);
    }
        //Log the current scores
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

