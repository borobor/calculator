let displayCurrentNumber = document.querySelector(".second-row");
let displayLoggedNumber = document.querySelector(".first-row");

let keyPad = document.querySelectorAll("button");

let currentNumber = '';
let loggedNumber = '';

keyPad.forEach((key) => {
  key.addEventListener("click", () => {
    keyClicked = key.textContent;
    calculate();
  });
});

let calculate = function (e) {
	if (keyClicked >= 0 && keyClicked <= 9) {
		currentNumber += keyClicked;
		displayCurrentNumber.textContent = currentNumber;
	}
  if (keyClicked == "AC") {
    currentNumber = "";
    displayCurrentNumber.textContent = "";
  }
	if (keyClicked == '+') {
		loggedNumber = +loggedNumber + +currentNumber;
		currentNumber = "";
		displayCurrentNumber.textContent = "";
		displayLoggedNumber.textContent = loggedNumber;
	}
};
