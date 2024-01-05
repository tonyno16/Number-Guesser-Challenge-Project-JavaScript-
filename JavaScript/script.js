let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates a random target number between 0 and 9
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

// Compares the guesses of the human and computer to the target number
// Returns true if the human's guess is closer or if there's a tie
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Your number is out of range. Please choose a number between 0 and 9.');
        return false; // This can be handled differently based on game rules
    }

    const humanDifference = getAbsoluteDistance(humanGuess, targetNumber);
    const computerDifference = getAbsoluteDistance(computerGuess, targetNumber);

    return humanDifference <= computerDifference;
}

// Updates the score of the winner ('human' or 'computer') after each round
function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

// Advances the game to the next round by incrementing the current round number
function advanceRound() {
    currentRoundNumber += 1;
}

// New functions

// Calculates and returns the absolute distance between two numbers
function getAbsoluteDistance(number1, number2) {
    return Math.abs(number1 - number2);
}
