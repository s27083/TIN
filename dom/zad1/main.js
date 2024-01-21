// JavaScript
document.getElementById('btn1').onclick = function() {
  const container = document.getElementById('container');  
  let newDiv = document.createElement('div');
  newDiv.textContent = 'New Div';
  container.appendChild(newDiv);
}

document.getElementById('btn2').onclick = function() {
  let firstDiv = document.querySelector('#container :first-child');
  if (firstDiv) firstDiv.remove();
}

document.getElementById('btn3').onclick = function() {
  let thirdDiv = document.getElementById('div3');
  if (thirdDiv) thirdDiv.style.backgroundColor = 'yellow';
}

document.getElementById('btn4').onclick = function() {
  let allDivs = document.querySelectorAll('#container > div');
  allDivs.forEach(div => div.textContent = 'New Text');
}