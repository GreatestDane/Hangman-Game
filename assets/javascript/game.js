// alright, let's start by declaring the variables for the game //
var gameOver = false;
var points = 0;
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var userGuess;
var randomWord;
var currentWord = [];
var letterSwap;

// Declare the span variables //
var spanWins = document.getElementById("wins");
var spanLosses = document.getElementById("losses");
var spanCurrentWord = document.getElementById("current-word");
var spanGuessesRemaining = document.getElementById("guesses-remaining");
var spanAlreadyGuessed = document.getElementById("already-guessed");

// Declare functions for game //

function displayWord(array) {
    for (var i = 0; i < array.length; i++) {
        currentWord.push("-");
        spanCurrentWord.textContent = currentWord;
    }
}

function gameReset() {
    guessesLeft = 12;
    spanGuessesRemaining.textContent = guessesLeft;
    spanAlreadyGuessed.textContent = " ";
    currentWord = [];
    randomWord = words[Math.floor(Math.random() * words.length)];
    displayWord(randomWord);
    alert(randomWord);

}

// Create the array of array's for the words you're going to have //
var words = [
    ['n', 'e', 'c', 'r', 'o', 's', 'i', 's'],
    ['r', 'a', 'g', 'e'],
    ['d', 'e', 'a', 't', 'h'],
    ['l', 'u', 'c', 'i', 'f', 'e', 'r'],
    ['m', 'a', 'g', 'i', 'c', 'k'],
    ['o', 'c', 'c', 'u', 'l', 't'],
    ['s', 'u', 'c', 'c', 'u', 'b', 'u', 's'],
    ['s', 'u', 'm', 'm', 'o', 'n'],
    ['r', 'i', 't', 'u', 'a', 'l'],
    ['c', 'r', 'o', 'w', 'l', 'e', 'y'],
    ['s', 'a', 'c', 'r', 'i', 'f', 'i', 'c', 'e'],
    ['a', 'l', 't', 'a', 'r']
]

// Create the array for the letters that are going to be guessed //
var lettersGuessed = [];

// Generate a random word //
randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

// present random word and number of guesses to the screen //
displayWord(randomWord);
spanGuessesRemaining.textContent = guessesLeft;

// Begin game by pressing any key on the keyboard //

document.onkeyup = function (event) {
    userGuess = event.key;
    // push userGuess into the array LettersGuessed and display it to screen //
    lettersGuessed.push(userGuess);
    spanAlreadyGuessed.textContent = lettersGuessed;
    spanGuessesRemaining.textContent = guessesLeft;

    // begin logic for game //
    // write an if statement to check if user guess matches a letter in the word, and replaces the blank spot //
    if (randomWord.indexOf(userGuess) === -1) {
        guessesLeft--;
        spanGuessesRemaining.textContent = guessesLeft;
    }

    while (randomWord.indexOf(userGuess) > -1) {
        letterSwap = randomWord.indexOf(userGuess);
        currentWord[letterSwap] = userGuess
        randomWord[letterSwap] = "-";
        spanCurrentWord.textContent = currentWord;
        points++;
    }

    if (points === randomWord.length) {
        wins++;
        spanWins.textContent = wins;
        gameOver = true;
    }

    if (guessesLeft === 0) {
        losses++;
        spanLosses.textContent = losses;
        gameOver = true;
    }

    if (gameOver === true) {
        gameOver = false;
        gameReset();
    }
}
