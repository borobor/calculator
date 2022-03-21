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
    click();
  });
});

let click = function () {
  if (keyClicked >= 0 && keyClicked <= 9) {
    currentNumber += keyClicked;
    secondRow.textContent = currentNumber;
  }
  if (keyClicked == "AC") {
		clearAll();
	}
  if (keyClicked == "+") {
		calculate();
		operator = '+';
    firstRow.textContent = `${result}+`;
    currentNumber = "";
    secondRow.textContent = "";
	}
	if (keyClicked == "-") {
		calculate();
		operator = '-';
		firstRow.textContent = `${result}-`;
		currentNumber = "";
		secondRow.textContent = "";
  }
	if (keyClicked == "x") {
		calculate();
		operator = 'x';
		firstRow.textContent = `${result}x`;
		currentNumber = "";
		secondRow.textContent = "";
  }
	if (keyClicked == "÷") {
		calculate();
		operator = '÷';
		firstRow.textContent = `${result}÷`;
		currentNumber = "";
		secondRow.textContent = "";
  }
  if (keyClicked == "=") {
    firstRow.textContent = "";
		calculate();
		secondRow.textContent = result;
		loggedNumber = "";
		currentNumber = "";
  }
};

let calculate = function() {
	switch (operator) {
		case '+':
			result = +loggedNumber + +currentNumber;
			loggedNumber = result;
			break;
		case '-':
			if (loggedNumber == '') {
				loggedNumber = currentNumber;
				result = loggedNumber;
			} else {
				result = loggedNumber - currentNumber;
				loggedNumber = result;
			}
			break;
		case 'x':
			if (loggedNumber == '') {
				loggedNumber = currentNumber;
				result = loggedNumber;
			} else {
				result = loggedNumber * currentNumber;
				loggedNumber = result;
			}
			break;
		case '÷':
			if (loggedNumber == '') {
				loggedNumber = currentNumber;
				result = loggedNumber;
			} else {
				result = loggedNumber / currentNumber;
				loggedNumber = result;
			}
			break;
	}
};
	
let clearAll = function() {
		currentNumber = "";
		loggedNumber = "";
		result = "";
		secondRow.textContent = "";
		firstRow.textContent = "";
	};
