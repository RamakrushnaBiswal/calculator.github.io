const display = document.querySelector('.input');
let currentInput = '';
let memory = 0;

// Function for update the display
function updateDisplay() {
  display.value = currentInput;
}

// Function for  to clear the display
function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

// function for append text to the display
function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

// for to add to memory
function memoryAdd() {
  memory += parseFloat(currentInput);
  clearDisplay();
}

// for subtract from memory
function memorySubtract() {
  memory -= parseFloat(currentInput);
  clearDisplay();
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