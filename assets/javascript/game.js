// alright, let's start by declaring the variables for the game //
var gameOver = false;
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
    for (var i = 0; i < array.length; i ++) {
        currentWord.push("-");
        spanCurrentWord.textContent = currentWord;
    }
}

// Create the array of array's for the words you're going to have //
var words = [
    ['n', 'e', 'c', 'r', 'o', 's', 'i', 's'],
    ['r', 'a', 'g', 'e'],
    ['d', 'e', 'a', 't', 'h'],
    ['l', 'u', 'c', 'i', 'f', 'e', 'r'],
    ['m', 'a', 'g', 'i', 'c', 'k'],
    ['o', 'c', 'c', 'u', 'l', 't'],
    ['s', 'u', 'c', 'c', 'u', 'b', 'u', 's']
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

document.onkeyup = function(event) {
    userGuess = event.key;
    // push userGuess into the array LettersGuessed and display it to screen //
    lettersGuessed.push(userGuess);
    spanAlreadyGuessed.textContent = lettersGuessed;
    guessesLeft --;
    spanGuessesRemaining.textContent = guessesLeft;

    // begin logic for game //

    if (randomWord.lastIndexOf(userGuess) > -1) {
        alert(userGuess + " is present")
        letterSwap = randomWord.indexOf(userGuess);
        alert(letterSwap);
        currentWord[letterSwap] = userGuess
        spanCurrentWord.textContent = currentWord;
    }


}
