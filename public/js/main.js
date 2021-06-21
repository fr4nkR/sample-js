let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const square1 = document.querySelector("#box1");
const square2 = document.querySelector("#box2");
const square3 = document.querySelector("#box3");
const square4 = document.querySelector("#box4");
const square5 = document.querySelector("#box5");
const square6 = document.querySelector("#box6");
const square7 = document.querySelector("#box7");
const square8 = document.querySelector("#box8");
const square9 = document.querySelector("#box9");
const startButton = document.querySelector("#start");

startButton.addEventListener("click", (event) => {
	on = true;
	console.log("button pressed");
	if (on || win) {
		play();
	}
});
function ani() {
	if (on) {
		return;
	} else {
		if (document.getElementById("start").classList.contains("classname")) {
			document.getElementById("start").classList.remove("classname");
		} else {
			document.getElementById("start").classList.add("classname");
		}
	}
}
//starts a new game and resets everything
function play() {
	if (
		document.getElementById("start").classList.contains("classnameInfinite")
	) {
		document.getElementById("start").classList.remove("classnameInfinite");
	}
	win = false;
	order = [];
	playerOrder = [];
	flash = 0;
	intervalId = 0;
	turn = 1;
	good = true;
	//randomizes the correct answers for the order and puts it onto order array
	for (var i = 0; i < 20; i++) {
		order.push(Math.floor(Math.random() * 9) + 1);
	}
	//computer goes first
	compTurn = true;
	//sets the interval between flashes (how fast the pattern is)
	intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
	console.log("order", order);
	on = false;

	//if the pattern is finished flashing and it's the users turn
	if (flash == turn) {
		clearInterval(intervalId);
		compTurn = false;
		clearColor();
		on = true;
	}
	if (compTurn) {
		//turns the blocks on one-by-one during computers turn
		clearColor();
		setTimeout(() => {
			if (order[flash] == 1) one();
			if (order[flash] == 2) two();
			if (order[flash] == 3) three();
			if (order[flash] == 4) four();
			if (order[flash] == 5) five();
			if (order[flash] == 6) six();
			if (order[flash] == 7) seven();
			if (order[flash] == 8) eight();
			if (order[flash] == 9) nine();
			//every comp turn, add one more flash
			flash++;
		}, 200);
	}
}
//all these functions do is change their color to white when clicked on
function one() {
	square1.style.backgroundColor = "white";
}
function two() {
	square2.style.backgroundColor = "white";
}
function three() {
	square3.style.backgroundColor = "white";
}
function four() {
	square4.style.backgroundColor = "white";
}
function five() {
	square5.style.backgroundColor = "white";
}
function six() {
	square6.style.backgroundColor = "white";
}
function seven() {
	square7.style.backgroundColor = "white";
}
function eight() {
	square8.style.backgroundColor = "white";
}
function nine() {
	square9.style.backgroundColor = "white";
}
//resets to original color
function clearColor() {
	square1.style.backgroundColor = "#246cb9";
	square2.style.backgroundColor = "#246cb9";
	square3.style.backgroundColor = "#246cb9";
	square4.style.backgroundColor = "#246cb9";
	square5.style.backgroundColor = "#246cb9";
	square6.style.backgroundColor = "#246cb9";
	square7.style.backgroundColor = "#246cb9";
	square8.style.backgroundColor = "#246cb9";
	square9.style.backgroundColor = "#246cb9";
}
//flashes the colors
function flashColor() {
	square1.style.backgroundColor = "white";
	square2.style.backgroundColor = "white";
	square3.style.backgroundColor = "white";
	square4.style.backgroundColor = "white";
	square5.style.backgroundColor = "white";
	square6.style.backgroundColor = "white";
	square7.style.backgroundColor = "white";
	square8.style.backgroundColor = "white";
	square9.style.backgroundColor = "white";
}

square1.addEventListener("click", (event) => {
	if (on) {
		playerOrder.push(1);
		check();
		one();
		if (!win) {
			setTimeout(() => {
				//clears the color after 300ms
				clearColor();
			}, 300);
		}
	}
});

square2.addEventListener("click", (event) => {
	if (on) {
		playerOrder.push(2);
		check();
		two();
		if (!win) {
			setTimeout(() => {
				//clears the color after 300ms
				clearColor();
			}, 300);
		}
	}
});

square3.addEventListener("click", (event) => {
	if (on) {
		playerOrder.push(3);
		check();
		three();
		if (!win) {
			setTimeout(() => {
				//clears the color after 300ms
				clearColor();
			}, 300);
		}
	}
});

square4.addEventListener("click", (event) => {
	if (on) {
		playerOrder.push(4);
		check();
		four();
		if (!win) {
			setTimeout(() => {
				//clears the color after 300ms
				clearColor();
			}, 300);
		}
	}
});

square5.addEventListener("click", (event) => {
	if (on) {
		playerOrder.push(5);
		check();
		five();
		if (!win) {
			setTimeout(() => {
				//clears the color after 300ms
				clearColor();
			}, 300);
		}
	}
});

square6.addEventListener("click", (event) => {
	if (on) {
		playerOrder.push(6);
		check();
		six();
		if (!win) {
			setTimeout(() => {
				//clears the color after 300ms
				clearColor();
			}, 300);
		}
	}
});

square7.addEventListener("click", (event) => {
	if (on) {
		playerOrder.push(7);
		check();
		seven();
		if (!win) {
			setTimeout(() => {
				//clears the color after 300ms
				clearColor();
			}, 300);
		}
	}
});

square8.addEventListener("click", (event) => {
	if (on) {
		playerOrder.push(8);
		check();
		eight();
		if (!win) {
			setTimeout(() => {
				//clears the color after 300ms
				clearColor();
			}, 300);
		}
	}
});

square9.addEventListener("click", (event) => {
	if (on) {
		playerOrder.push(9);
		check();
		nine();
		if (!win) {
			setTimeout(() => {
				//clears the color after 300ms
				clearColor();
			}, 300);
		}
	}
});

function check() {
	//if the last guess does not match the corresponding correct answer
	if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
		good = false;
	//if the player made 5 correct guesses
	if (playerOrder.length == 5 && good) {
		winGame();
	}
	//if incorrect answer, play again and clear colors
	if (good == false) {
		flashColor;
		setTimeout(() => {
			play();
			clearColor();
		}, 800);
	}
	//if they got the correct answer but haven't won yet
	if (turn == playerOrder.length && good && !win) {
		//increments player's turn
		turn++;
		//resets player's past order
		playerOrder = [];
		compTurn = true;
		flash = 0;
		//sets the interval between flashes (how fast the pattern is)
		intervalId = setInterval(gameTurn, 800);
	}
}

function winGame() {
	flashColor();
	if (document.getElementById("start").classList.contains("classname")) {
		document.getElementById("start").classList.remove("classname");
	}
	//shakes the start button to indicate the user they can play again
	document.getElementById("start").classList.add("classnameInfinite");

	on = false;
	win = true;
}
