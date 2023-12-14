// Get the necessary elements from the DOM
const displayHistory = document.querySelector('.display__history');
const displayResult = document.querySelector('.display__result');
const keypad = document.querySelector('.keypad');

// Add event listener to the keypad
keypad.addEventListener('click', function(event) {
  const button = event.target;
  const buttonText = button.textContent;

  // Handle different button clicks
  if (buttonText === '=') {
    // Evaluate the expression and display the result
    const expression = displayHistory.textContent + displayResult.textContent;
    const result = eval(expression);
    displayResult.textContent = result;
    displayHistory.textContent = '';
  } else if (buttonText === 'C') {
    // Clear the display
    displayResult.textContent = '0';
    displayHistory.textContent = '';
  } else {
    // Append the clicked button's text to the display
    displayResult.textContent += buttonText;
  }
});