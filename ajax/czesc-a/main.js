// JavaScript
let previousData = null;
let newsHistory = [];

async function fetchData() {
    const response = await fetch('http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php');
    const data = await response.json();
    
    if (JSON.stringify(data) !== JSON.stringify(previousData)) {
      updateDOM(data);
      previousData = data;
    }
}

function updateDOM(data) {
  let stockTable = document.querySelector('#stock-table tbody');
  stockTable.innerHTML = '';
  
  for (let company in data.stock) {
    let row = document.createElement('tr');
    row.innerHTML = `<td>${company}</td><td>${data.stock[company]}</td>`;
    stockTable.appendChild(row);
  }

  let newsRotator = document.getElementById('news-rotator');
  newsHistory.unshift(data.news);
  newsHistory = newsHistory.slice(0, 3);
  newsRotator.innerHTML = newsHistory.join('<hr>');
}

async function main() {
await fetchData();
setInterval(fetchData, 10000); 
}
main();