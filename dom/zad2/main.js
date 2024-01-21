// JavaScript
document.getElementById('calculate').onclick = function() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let operator = document.getElementById('operator').value;
  let result;

  switch (operator) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 != 0) {
        result = num1 / num2;
      } else {
        result = 'Error: Division by zero';
      }
      break;
  }

  document.getElementById('result').textContent = 'Result: ' + result;
}