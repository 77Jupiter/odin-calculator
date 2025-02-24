let num1 = '';
let num2 = '';
let operator = '';

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

const displayElement = document.querySelector('.js-display');

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
  const numButton = document.querySelectorAll('.js-num-button');
  const operatorButton = document.querySelectorAll('.js-operator-button');
  operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
      if (num1 && !isNaN(num1)) {
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

const equalButton = document.querySelector('.js-equal-button');
equalButton.addEventListener('click', () => {
  const answer = operate(operator, num1, num2);
  if (answer === 'Cannot divide by 0') {
    displayElement.textContent = answer;
  } else {
    num1 = Math.round(answer * 100) / 100;
    num2 = '';
    operator = '';
    displayElement.textContent = num1;
  } 
})