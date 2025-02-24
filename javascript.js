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