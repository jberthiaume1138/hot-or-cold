
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




document.onload = newGame();

// --------- create event handler for the NEW button ------------
// could more simply do this with jQuery like the repository did with .what
// TODO: find a more elegant way to do this with vanilla Javascript
var ham = document.getElementsByClassName("new");
var stuff = ham[0];
console.log(stuff);
stuff.addEventListener("click",function(event) {
	// handler for li a class=new
	console.log('new clicked');
	newGame();
});

// ---------- event handler for the guessButton -----------------
document.getElementById('guessButton').addEventListener("click",function(event) {
// handler for <input type="submit" id="guessButton" class="button" name="submit" value="Guess">
	console.log('guess clicked');
	checkGuess(guess);
});



function game() {
	//create event handler for NEW
	var ham = document.getElementsByClassName("new");
	var stuff = ham[0];
	console.log(stuff);
	stuff.addEventListener("click",function(event) {
		// handler for li a class=new
		console.log('new clicked');
		newGame();
	});

	document.getElementById('guessButton').addEventListener("click",function(event) {
		// handler for <input type="submit" id="guessButton" class="button" name="submit" value="Guess">
		console.log('guess button clicked');
		checkGuess();
	});

};




// <input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required="">

// p span id=count // count of guesses

// function to generate a new random number and clear the guess list 

function newGame() {
	// reset the guess log/list
	document.getElementById('guessList').innerHTML = '';
	// call create number

	createNumber();
};

function createNumber() {
	// generate random number 1 - 100
	var randomnumber = Math.floor(Math.random()*11);
	console.log(randomnumber);
};

function checkGuess (guess) {


	var randomnumber = Math.floor(Math.random()*101);
	console.log(randomnumber);
};

// function createNumber() {
// 	// generate random number 1 - 100
// 	// var randomnumber=Math.floor(Math.random()*11);
// 	// console.log(randomnumber);
// };



function checkGuess (secretNumber) {

	// grab user input from box, process
	var guess = document.getElementById('userGuess').value;
	// input validation for numbers only
	// input validation for numbers BETWEEN 1-100
	// input validation for repeat guess
	
	// store valid guesses in an array.
	var listOfGuesses = [];
	listOfGuesses.push(guess);

	var delta = Math.abs(guess - secretNumber);

	document.getElementById(guessList).innerHTML += '<li>' + guess + '</li>';

	if (secretNumber = guess) {
		console.log('success');
		success();
	}
	else if (delta < 10) {
		console.log('red hot');
	}
	else if (delta > 10 ) && (delta < 20) {
		console.log('hot');
		document.getElementById('feedback').value = 'hot';
	}
	else if (delta > 20 ) && (delta < 30) {
		console.log('warm');
	}
	else if (delta > 30 ) && (delta < 40) {
		console.log('room temperature')
	}
	else if (delta > 40 ) && (delta < 50) {
		console.log('cool');
	}
	else if (delta > 50 ) && (delta < 60) {
		console.log('cold');
	}
	else if (delta > 60 ) && (delta < 70) {
		console.log('frozen');
	}
	else if (delta > 70 ) && (delta < 80) {
		console.log('Ice Planet Hoth');
	}
};

function success() {
	// tada
};
