// Create an array with every letter of the alphabet for random selection //

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
// Create variables for the score, amount of guesses, and letters guessed //

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var gameOver = false;

// create variables for the span elements //

var spanWins = document.getElementById("wins");
var spanLosses = document.getElementById("losses");
var spanGuessesLeft = document.getElementById("guesses-left");
var spanGuessesSoFar = document.getElementById("guesses-sofar");

// Computer generates a random letter and user chooses a letter//
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// display the number of current guesses left //
spanGuessesLeft.textContent = guessesLeft;

//Create a game-over function to reset all of your variables//
function gameReset() {
    guessesLeft = 9;
    lettersGuessed = []
    spanGuessesLeft.textContent = guessesLeft;
    spanGuessesSoFar.textContent = lettersGuessed;
    gameOver = false;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
}


// Create the function for the key press event //
document.onkeyup = function(event) {
    var userGuess = event.key;
    // Push all letters user guesses into the array of letters guessed //
    lettersGuessed.push(userGuess);
    // display letters guessed //
    spanGuessesSoFar.textContent = lettersGuessed;
    // subtract and display a guess //
    guessesLeft --;
    spanGuessesLeft.textContent = guessesLeft;

    // write logic for a win or loss //
    if (userGuess.toLowerCase() === computerGuess) {
        alert("YOU WIN! The letter was: " + computerGuess);
        wins ++;
        gameOver = true;
        spanWins.textContent = wins;
    }
    else if (guessesLeft === 0) {
        alert("YOU LOSE! The letter was: " + computerGuess);
        losses ++;
        gameOver = true;
        spanLosses.textContent = losses;
    }
    // Reset game when it ends //
    if (gameOver === true) {
        gameReset();
    }
};



