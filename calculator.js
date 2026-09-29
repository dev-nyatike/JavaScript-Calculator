// Stores all calculations made by the calculator
const history = [];

// Adds a calculation to the history
function addToHistory(firstNumber, operator, secondNumber, result) {
  history.push({
    operands: [firstNumber, secondNumber],
    operator: operator,
    result: result
  });
}

// Addition
function add(firstNumber, secondNumber) {
  const result = firstNumber + secondNumber;
  addToHistory(firstNumber, "+", secondNumber, result);
  return result;
}

// Subtraction
function subtract(firstNumber, secondNumber) {
  const result = firstNumber - secondNumber;
  addToHistory(firstNumber, "-", secondNumber, result);
  return result;
}

// Multiplication
function multiply(firstNumber, secondNumber) {
  const result = firstNumber * secondNumber;
  addToHistory(firstNumber, "*", secondNumber, result);
  return result;
}

// Division
function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return "Cannot divide by zero";
  }

  const result = firstNumber / secondNumber;
  addToHistory(firstNumber, "/", secondNumber, result);
  return result;
}

// Displays the calculation history
function displayHistory() {
  if (history.length === 0) {
    return "No calculations stored.";
  }

  return history;
}

module.exports = {
  history,
  add,
  subtract,
  multiply,
  divide,
  addToHistory,
  displayHistory
};