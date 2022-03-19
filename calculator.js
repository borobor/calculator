let secondRow = document.querySelector(".second-row");
let firstRow = document.querySelector(".first-row");

let keyPad = document.querySelectorAll("button");

let currentNumber = "";
let loggedNumber = "";
let result = "";
let operator;

keyPad.forEach((key) => {
  key.addEventListener("click", () => {
    keyClicked = key.textContent;
    calculate();
  });
});

let calculate = function () {
  if (keyClicked >= 0 && keyClicked <= 9) {
    currentNumber += keyClicked;
    secondRow.textContent = currentNumber;
  }
  if (keyClicked == "AC") {
    currentNumber = "";
    loggedNumber = "";
    secondRow.textContent = "";
    firstRow.textContent = "";
  }
  if (keyClicked == "+") {
		operator = '+';
    loggedNumber = +loggedNumber + +currentNumber;
    currentNumber = "";
    secondRow.textContent = "";
    firstRow.textContent = `${loggedNumber}+`;
	}
	if (keyClicked == "-") {
		loggedNumber = currentNumber;
		currentNumber = "";
		secondRow.textContent = "";
		firstRow.textContent = `${loggedNumber}-`;
		
  }
  if (keyClicked == "=") {
    firstRow.textContent = "";
		if (operator == '+') {
			result = +loggedNumber + +currentNumber;
    	secondRow.textContent = result;
		}
		loggedNumber = "";
		currentNumber = "";
  }
};
