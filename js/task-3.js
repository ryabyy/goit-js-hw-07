const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const defaultName = "Anonymous";

nameInput.addEventListener("input", (event) => {
	event.target.value = event.target.value.trim();
	const value = event.target.value;
	if (value) {
		nameOutput.textContent = value.charAt(0).toUpperCase() + value.substring(1);
	} else {
		nameOutput.textContent = defaultName;
	}
});