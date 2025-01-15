const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

equalsButton.addEventListener("click", () => {
  if (currentInput) {
    try {
      // Use eval() to evaluate the expression
      const result = eval(currentInput);
      display.value = result;
      currentInput = ""; // Reset input after evaluation
    } catch (error) {
      display.value = "Error";
    }
  }
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});
