let displayCurrentNumber = document.querySelector('.second-row');

let keyPad = document.querySelectorAll('button');

let currentNumber = '';

keyPad.forEach(key => {
	key.addEventListener('click', () => {
	keyClicked = key.textContent;
	currentNumber += keyClicked
	displayCurrentNumber.textContent += keyClicked;
	calculate();
	});
});

let calculate = function(e) {
	if (keyClicked == 'AC') {
		currentNumber = '';
		displayCurrentNumber.textContent = '';
	}
};



