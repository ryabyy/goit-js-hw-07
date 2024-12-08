const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const initBoxParams = {
	width: 30,
	height: 30
};
const nextBoxStep = 10;
const maxBoxes = 100;
const minBoxes = 1;

createBtn.addEventListener('click', (e) => {
	const inputValue = Number(input.value);
	if (inputValue >= minBoxes && inputValue <= maxBoxes) {
		destroyBoxes();
		createBoxes(inputValue);
		input.value = '';
	}
});

destroyBtn.addEventListener('click', (e) => {
	destroyBoxes();
});

function createBoxes(amount) {
	const boxParams = {...initBoxParams};
	const boxElements = [];
	for (let i = 0; i < amount; i++) {
		const box = document.createElement('div');
		box.style.width = `${boxParams.width}px`;
		box.style.height = `${boxParams.height}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxElements.push(box);

		boxParams.width += nextBoxStep;
		boxParams.height += nextBoxStep;
	}
	boxes.append(...boxElements);
}

function destroyBoxes() {
	Array.from(boxes.children).forEach((box) => {
		box.remove();
	});
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}