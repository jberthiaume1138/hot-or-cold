
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

//create event handler for NEW
var ham = document.getElementsByClassName("new");	// make all this more elegant
var stuff = ham[0];
console.log(stuff);
stuff.addEventListener("click",function(event) {
	// handler for li a class=new
	console.log('new clicked');
	newGame();
});

document.getElementById('guessButton').addEventListener("click",function(event) {
// handler for <input type="submit" id="guessButton" class="button" name="submit" value="Guess">
	console.log('guess clicked');
	checkGuess(guess);
});

// <input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required="">

// p span id=count // count of guesses

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
	// grab user input from box, compare to createdNumber
};

function success() {
	// tada
};
