//Define the letters available to choose from in an array.
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9
//guessesSoFar will hold the user's guesses in an array.
var guessesSoFar = [];
// userGuess is what the user picked.
var userGuess = null;
// ComputerGuess is the letter computer has chosen randomly.
var computerGuess = options[Math.floor(Math.random() * options.length)];

// to start function:
document.onkeyup = function(event) {

  // When user presses a key, it records it and saves to userGuess and ensures that a Capital letter will always revert to lowercase.
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // Add the user's guess to guessesSoFar array but
  // only if it wasn't already picked by the user
  // and user only picked options available.
  if (guessesSoFar.indexOf(userGuess) < 0 && options.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    // guesses goes down by 1
    guessesLeft--;
  }

  // if userGuess is same as computerGuess then win goes up by 1
  // and then game resets by guessesLeft turns back to 9, and guessesSoFar array empties out
  // computer picks new guess for new game
  if (computerGuess == userGuess) {
    wins++;
    alert("Hey! You're pretty psychic. Good job!")
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = options[Math.floor(Math.random() * options.length)];
  }

  // if guessesLeft gets to 0, user loses, so losses goes up by 1
  // game resets: guessesLeft goes back to 9, and guessesSoFar array empties out
  // computer picks a new guess for new game
  if (guessesLeft == 0) {
    losses++;
    alert("Ha! You're not very psychic. Try again?")
    guessesLeft = 9;
    guessesSoFar = [];
    computerGuess = options[Math.floor(Math.random() * options.length)];
  }

  //id game is selected to be changed in the index.html document- the var html shows what changes.
  //The entire content of div id game must be written in or it will disappear when this runs.
var html = "<h1>The Psychic Game</h1>" +
  "<p>How psychic are you? Play this game to find out. What letter am I thinking of?</p>" +
  "<h4>Wins: " + wins + "</h4>" +
  "<h4>Losses: " + losses + "</h4>" +
  "<h4>Guesses Left: " + guessesLeft + "</h4>" +
  "<h4>Your guesses so far: " + guessesSoFar + "</h4>";
  // place html into the game ID
  document.querySelector("#game").innerHTML = html;

}


