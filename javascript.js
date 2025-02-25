let num1 = '';
let num2 = '';
let operator = '';

const numButton = document.querySelectorAll('.js-num-button');
const operatorButton = document.querySelectorAll('.js-operator-button');
const decimalButton = document.querySelector('.js-decimal-button');
const displayElement = document.querySelector('.js-display');
const equalButton = document.querySelector('.js-equal-button');
const clearButton = document.querySelector('.js-clear-button');

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

function divide(num1, num2) {
  if (Number(num2) === 0) {
    return 'Cannot divide by 0';
  }
  return Number(num1) / Number(num2); 
}

function operate(operator, num1, num2) {
  switch(operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

function updatePage() {
  displayElement.textContent = `${num1} ${operator} ${num2}`;
}

function clear() {
  num1 = '';
  operator = '';
  num2 = '';
  updatePage();
}

function updateNumAndOperator() {
  decimalButton.addEventListener('click', () => {
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
      if (!num2.includes('.')) {
        num2 += '.';
        updatePage();
      }
    } else if (!num1.includes('.')) {
      num1 += '.';
      updatePage();
    }
  })

  operatorButton.forEach((button) => {
    button.addEventListener('click', () => {  
      if (num1 && !isNaN(num1) && num2 && !isNaN(num2)) {
        const answer = operate(operator, num1, num2);
        num1 = Math.round(answer * 100) / 100;
        num2 = '';
        operator = button.textContent;
        updatePage();
      } else if (num1 && !isNaN(num1)) {
        operator = button.textContent;
        updatePage();
      } else {
        clear();
        displayElement.textContent = 'Please enter a number first';
      }    
    })
  });
  numButton.forEach((button) => {
    button.addEventListener('click', () => {
      if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        num2 += button.textContent;
      } else {
        num1 += button.textContent;
      }
      updatePage();  
    })
  })
}

updateNumAndOperator();

equalButton.addEventListener('click', () => {
  displayAnswer();
})

clearButton.addEventListener('click', () => {
  clear();
})

function displayAnswer() {
  const answer = operate(operator, num1, num2);
  if (!num1 || !operator || !num2) {
    displayElement.textContent = 'Invalid equation';
    return;
  }
  if (answer === 'Cannot divide by 0') {
    displayElement.textContent = answer;
  } else {
    clear();
    displayElement.textContent = Math.round(answer * 100) / 100;
  } 
}

// Add backspace button and general keyboard support and style the calculator

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
      num2 = num2.replace(/.$/, '');
      updatePage(); 
      return;
    } else {
      num1 = num1.replace(/.$/, '');
      updatePage();  
    }
    
  } 
  if (/\d/.test(event.key)) {
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
      num2 += event.key;
      updatePage();  
      return;
    } else {
      num1 += event.key;
      updatePage();  
    }
  } 
  
  if (num1 === '' || isNaN(num1)) {
    displayElement.textContent = 'Please enter a number first';
    return;
  } else if (['+', '-', '*', '/'].includes(event.key)) {
    operator = event.key;
    updatePage();
  }

  if (event.key === 'Enter') {
    displayAnswer();
  } 
});
