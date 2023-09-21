const displayHistory = document.querySelector('.display__history');
const displayResult = document.querySelector('.display__result');
const keypad = document.querySelector('.keypad');
let history = '';
let result = '0';

keypad.addEventListener('click', (event) => {
  const key = event.target.textContent;
  if (key === 'C') {
    history = '';
    result = '0';
  } else if (key === '=') {
    try {
      result = eval(history);
      history = '';
    } catch (error) {
      result = 'Error';
    }
  } else {
    history += key;
  }
  displayHistory.textContent = history;
  displayResult.textContent = result;
});