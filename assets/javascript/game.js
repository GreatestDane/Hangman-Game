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
var playOver = false;
var randomImage;
var randomIdx;

// Declare the span variables //
var spanWins = document.getElementById("wins");
var spanLosses = document.getElementById("losses");
var spanCurrentWord = document.getElementById("current-word");
var spanGuessesRemaining = document.getElementById("guesses-remaining");
var spanAlreadyGuessed = document.getElementById("already-guessed");
var spanEndGame = document.getElementById("end-game");
var spanWinsLoss = document.getElementById("wins-loss");

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
    ['a', 'l', 't', 'a', 'r'],
    ['s', 'p', 'e', 'l', 'l', 's'],
    ['a', 'm', 'u', 'l', 'e', 't'],
    ['i', 'n', 'c', 'u', 'b', 'u', 's']
];

// Create the array of images you can use //

var images = [
    ["./assets/images/necrosis.jpg"],
    ["./assets/images/rage.jpg"],
    ["./assets/images/death.jpg"],
    ["./assets/images/lucifer.jpg"],
    ["./assets/images/magick.jpg"],
    ["./assets/images/occult.jpg"],
    ["./assets/images/succubus.jpg"],
    ["./assets/images/summon.png"],
    ["./assets/images/ritual.jpg"],
    ["./assets/images/crowley.jpg"],
    ["./assets/images/sacrifice.jpg"],
    ["./assets/images/altar.JPG"],
    ["./assets/images/spells.jpg"],
    ["./assets/images/amulet.jpg"],
    ["./assets/images/incubus.jpg"],
    ["./assets/images/clown-lose.jpg"]
];

// Create the array for the letters that are going to be guessed //
var lettersGuessed = [];

// Declare functions for game //

function displayWord(array) {
    for (var i = 0; i < array.length; i++) {
        currentWord.push("-");
        spanCurrentWord.textContent = currentWord;
    }
}

function gameReset() {
    gameOver = false;
    playOver = false;
    guessesLeft = 12;
    points = 0;
    spanGuessesRemaining.textContent = guessesLeft;
    lettersGuessed = [];
    spanAlreadyGuessed.textContent = lettersGuessed;
    currentWord = [];
    randomIdx = Math.floor(Math.random() * words.length);
    randomWord = words[randomIdx].slice();
    displayWord(randomWord);
    console.log(randomWord);
};


// Generate a random word //
randomIdx = Math.floor(Math.random() * words.length);
randomWord = words[randomIdx].slice();
console.log(randomWord);
console.log(randomImage);

// present random word and number of guesses to the screen //
displayWord(randomWord);
spanGuessesRemaining.textContent = guessesLeft;

// Begin game by pressing any key on the keyboard //

document.onkeyup = function (event) {
    userGuess = event.key;
    if (playOver === true) {
        gameOver = true;
    };
    // push userGuess into the array LettersGuessed and display it to screen //
    // lettersGuessed.push(userGuess);
    // spanAlreadyGuessed.textContent = lettersGuessed;
    spanGuessesRemaining.textContent = guessesLeft;

    // begin logic for game //
    // write an if statement to check if user guess matches a letter in the word, and replaces the blank spot //
    if (lettersGuessed.indexOf(userGuess) === -1) {
        lettersGuessed.push(userGuess);
        spanAlreadyGuessed.textContent = lettersGuessed;

        if (randomWord.indexOf(userGuess) === -1) {
            guessesLeft--;
            spanGuessesRemaining.textContent = guessesLeft;
        };

        while (randomWord.indexOf(userGuess) > -1) {
            letterSwap = randomWord.indexOf(userGuess);
            currentWord[letterSwap] = userGuess;
            randomWord[letterSwap] = "*";
            spanCurrentWord.textContent = currentWord;
            points++;
        };
    };


    if (points === randomWord.length && gameOver === false) {
        wins++;
        spanWins.textContent = wins;
        spanEndGame.src = images[randomIdx];
        spanWinsLoss.textContent = "You win!"
        playOver = true;
    };

    if (guessesLeft < 1 && gameOver === false) {
        losses++;
        spanLosses.textContent = losses;
        spanEndGame.src = images[15];
        spanWinsLoss.textContent = "You lose!";
        playOver = true;
    };

    if (gameOver === true) {
        gameReset();
    };
};
