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