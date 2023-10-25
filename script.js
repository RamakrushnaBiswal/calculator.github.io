const display = document.querySelector('.input');
let currentInput = '';
// Function for update the display
function updateDisplay() {
  display.value = currentInput;
}
// Function for deleting
function de() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// Function for  to clear the display
function clearDisplay() {
  currentInput = '';
  updateDisplay();
}
// function for text to the display
function toDisplay(value) {
  currentInput += value;
  updateDisplay();
}
//for calculating percentage
function calculatePercentage() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }
}
// for calculations
function calculate() {
  if (currentInput.length === 0) return;
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Invalid!';
    updateDisplay();
  }
}