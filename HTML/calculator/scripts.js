let display = document.getElementById('display');

function appendToDisplay(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '';
}

function calculateResult() {
  let result = eval(display.textContent);
  display.textContent = result;
}
