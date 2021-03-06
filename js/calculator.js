let secondRow = document.querySelector(".second-row");
let firstRow = document.querySelector(".first-row");

let keyPad = document.querySelectorAll("button");

let currentNum = "";
let loggedNum = "";
let result = "";
let operator = "";

keyPad.forEach((key) => {
  key.addEventListener("click", () => {
    keyClicked = key.textContent;
    click();
  });
});

let click = function () {
  if (keyClicked >= 0 && keyClicked <= 9) {
    currentNum += keyClicked;
    secondRow.textContent = Number.parseFloat(currentNum).toLocaleString("en-US");
  }
  if (keyClicked == "AC") {
		clearAll();
	}
	if (keyClicked == "DEL") {
		currentNum = currentNum.slice(0, -1);
		secondRow.textContent = currentNum;
	}
  if (keyClicked == "+") {
		if (!currentNum) return;
		calculate();
		operator = '+';
    updateDisplay();
	}
	if (keyClicked == "-") {
		if (!currentNum) return;
		calculate();
		operator = '-';
		updateDisplay();
  }
	if (keyClicked == "x") {
		if (!currentNum) return;
		calculate();
		operator = 'x';
		updateDisplay();
  }
	if (keyClicked == "÷") {
		if (!currentNum) return;
		calculate();
		operator = '÷';
		updateDisplay();
  }
	if (keyClicked == ".") {
		if (currentNum == "") return;
		if (currentNum.includes(".")) return;
		currentNum += keyClicked;
		secondRow.textContent = currentNum;
	}
  if (keyClicked == "=") {
		if (!loggedNum) return;
		calculate();
    displayResult();
  }
};

let updateDisplay = function() {
	firstRow.textContent = `${loggedNum} ${operator}`;
	currentNum = "";
	secondRow.textContent = "";
}

let calculate = function() {
	if (loggedNum == "") {
		loggedNum = currentNum;
		currentNum = "";
	} else {
		switch (operator) {
			case '+':
				result = +loggedNum + +currentNum;
				result = Math.round(result*1000)/1000;
				loggedNum = result;
				break;
			case '-':
				result = loggedNum - currentNum;
				result = Math.round(result*1000)/1000;
				loggedNum = result;
				break;
			case '÷':
				result = loggedNum / currentNum;
				result = Math.round(result*1000)/1000;
				loggedNum = result;
				break;
			case 'x':
				result = loggedNum * currentNum;
				result = Math.round(result*1000)/1000;
				loggedNum = result;
				break;
		}
	}
}

let clearAll = function() {
	currentNum = "";
	loggedNum = "";
	result = "";
	operator = "";
	secondRow.textContent = "";
	firstRow.textContent = "";
}

let displayResult = function() {
	firstRow.textContent = "";
	secondRow.textContent = Number.parseFloat(result).toLocaleString("en-US");
	currentNum = "";
	loggedNum = "";
	result = "";
	operator = "";
}
