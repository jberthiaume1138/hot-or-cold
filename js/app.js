$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

(function () {

var secretNumber;
var listOfGuesses = [];

document.onload = newGame();

function newGame() {
	document.getElementById('guessList').innerHTML = '';	// reset the lst of guesses
	listOfGuesses.length = 0;	// empty the guess array
	document.getElementById('feedback').innerHTML = 'Make your Guess!';	// reset the feedback
	document.getElementById('count').innerHTML = '0';
	
	secretNumber = Math.floor(Math.random()*101);	// generate random number 1 - 100
	// console.log(secretNumber);
};

// --------- event handler for the NEW button ------------
var listOfElements = document.getElementsByClassName('new');
var newButton = listOfElements[0];
newButton.addEventListener("click",function(event) {
	newGame();	// handler for li a class=new
});

// ---------- event handler for button id = guessButton -----------------
document.getElementById('guessButton').addEventListener("click",function(event) {
	event.preventDefault();
	var guess = document.getElementById('userGuess').value;

	if (validateGuess(guess) == true) {
		compareGuess(guess);	// guess passes validation, proceed with compare
	}
	document.getElementById('userGuess').value = '';	// done processing, clear the guess field for the next one
});

function validateGuess(guess) {
	if ((isNaN(parseInt(guess,10)))) {	// check that the guess is an integer
		alert('You must enter a valid integer.');
		document.getElementById('userGuess').value = '';
		document.getElementById('feedback').innerHTML = 'Make your Guess!';
		return false;
	}
	
	if ((guess < 0) || (guess > 100)) {	// check that the guess is in the specified range
		alert('You must enter an integer between 1 and 100 only.');
		document.getElementById('userGuess').value = '';
		document.getElementById('feedback').innerHTML = 'Make your Guess!';
		return false;
	}

	if (listOfGuesses.indexOf(guess) != -1) {	// check that the guess is not a repeat guess
		alert('You already guessed that number, try again.')
		document.getElementById('userGuess').value = '';
		document.getElementById('feedback').innerHTML = 'Make your Guess!';	// reset the feedback
		return false;
	}

	return true;
};

function compareGuess (guess) {
	
	document.getElementById('guessList').innerHTML += '<li>' + guess + '</li>';
	document.getElementById('feedback').innerHTML = '';

	listOfGuesses.push(guess); // add the guess to the array of guesses
	document.getElementById('count').innerHTML = listOfGuesses.length;	// indicate how many guesses so far

	var delta = Math.abs(guess - secretNumber);

	if (secretNumber == guess) {
		success();
	}
	else if (delta < 10) {
		document.getElementById('feedback').innerHTML = 'Red Hot';
	}
	else if ((delta > 10 ) && (delta < 20)) {
		document.getElementById('feedback').innerHTML = 'Hot';
	}
	else if ((delta > 20 ) && (delta < 30)) {
		document.getElementById('feedback').innerHTML = 'Warm';
	}
	else if ((delta > 30 ) && (delta < 40)) {
		document.getElementById('feedback').innerHTML = 'Room Temperature';
	}
	else if ((delta > 40 ) && (delta < 50)) {
		document.getElementById('feedback').innerHTML = 'Cool';
	}
	else if ((delta > 50 ) && (delta < 60)) {
		document.getElementById('feedback').innerHTML = 'Cold';
	}
	else if ((delta > 60 ) && (delta < 70)) {
		document.getElementById('feedback').innerHTML = 'Frozen';
	}
	else {
		document.getElementById('feedback').innerHTML = 'Ice Planet Hoth';
	}
};

function success() {
	document.getElementById('feedback').innerHTML = 'Correct!!! You Win!!!';
	document.getElementById('guessList').innerHTML += '<br/>' + listOfGuesses.length + ' total guesses';
};

})();


