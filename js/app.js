
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

//TODO: refactor to avoid use of global variable(s)
var secretNumber;
document.onload = newGame();

function newGame() {
	document.getElementById('guessList').innerHTML = '';	// reset the lst of guesses	
	secretNumber = Math.floor(Math.random()*101);	// generate random number 1 - 100
	console.log(secretNumber);
};

// --------- event handler for the NEW button ------------
// could simply do this with jQuery like the code from the repo did with .what
// TODO: figure out a more elegant way to do this with vanilla Javascript
var listOfElements = document.getElementsByClassName('new');
var newButton = listOfElements[0];
newButton.addEventListener("click",function(event) {
	// handler for li a class=new
	console.log('new clicked');
	newGame();
});

// ---------- event handler for button id = guessButton -----------------
document.getElementById('guessButton').addEventListener("click",function(event) {
	event.preventDefault();		// do I need this because the html type = submit?
	console.log('guess clicked');
	validateGuess();	//validate the guess, then process it if it's OK
	console.log('input text');
});

function validateGuess() {
	var guess = document.getElementById('userGuess').value;
	console.log(guess);
	
	if ((isNaN(parseInt(guess,10)))) {	// check that the guess is an integer
		alert('You must enter a valid integer.');
		document.getElementById('userGuess').value = '';
		return;
	}
	
	if (!((guess > 0) && (guess < 101))) {	// check that the guess is in the specified range
		alert('You must enter an integer between 1 and 100 only.');
		document.getElementById('userGuess').value = '';
		return;
	}

	if (listOfGuesses.indexOf('guess')) {	// check that the guess is not a repeat guess
		alert('You already guessed that number, try again.')
		document.getElementById('userGuess').value = '';
		return;
	}


};

// // process the guess, compare
// function checkGuess (guess) {

// 	// grab user input from box, process
	
// 	// input validation for numbers only
	
	
// 		// it is a number

// 		// check that it's not been used already
// 		// then check that it's between 1 - 100
	

// 	// input validation for numbers BETWEEN 1-100

// 	// input validation for repeat guess
	
// 	// store valid guesses in an array.
// 	var listOfGuesses = [];
// 	listOfGuesses.push(guess);

// 	var delta = Math.abs(guess - secretNumber);

// 	document.getElementById(guessList).innerHTML += '<li>' + guess + '</li>';

// 	if (secretNumber = guess) {
// 		console.log('success');
// 		success();
// 	}
// 	else if (delta < 10) {
// 		console.log('red hot');
// 	}
// 	else if ((delta > 10 ) && (delta < 20)) {
// 		console.log('hot');
// 		document.getElementById('feedback').value = 'hot';
// 	}
// 	else if ((delta > 20 ) && (delta < 30)) {
// 		console.log('warm');
// 	}
// 	else if ((delta > 30 ) && (delta < 40)) {
// 		console.log('room temperature')
// 	}
// 	else if ((delta > 40 ) && (delta < 50)) {
// 		console.log('cool');
// 	}
// 	else if ((delta > 50 ) && (delta < 60)) {
// 		console.log('cold');
// 	}
// 	else if ((delta > 60 ) && (delta < 70)) {
// 		console.log('frozen');
// 	}
// 	else {
// 		console.log('Ice Planet Hoth');
// 	}
// };

// function success() {
// 	// tada
// };


// document.onload = game();
// game {
// 	secretNumber = newgame();
// 	checkguess(secretNumber)
// }




// function game() {
// 	//create event handler for NEW
// 	var ham = document.getElementsByClassName("new");
// 	var stuff = ham[0];
// 	console.log(stuff);
// 	stuff.addEventListener("click",function(event) {
// 		// handler for li a class=new
// 		console.log('new clicked');
// 		newGame();
// 	});

// 	document.getElementById('guessButton').addEventListener("click",function(event) {
// 		// handler for <input type="submit" id="guessButton" class="button" name="submit" value="Guess">
// 		console.log('guess button clicked');
// 		checkGuess();
// 	});

// };




// <input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required="">

// p span id=count // count of guesses



