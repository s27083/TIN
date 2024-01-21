const cars = [
  {year: 2010, mileage: 100000, initial_price: 5000, final_price: 4500},
  {year: 2015, mileage: 50000, initial_price: 10000, final_price: 9500},
  {year: 2020, mileage: 10000, initial_price: 20000, final_price: 19000},
];

function generateTable(data) {
  const table = document.createElement('table');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  for (let key in data[0]) {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    for (let key in item) {
      const td = document.createElement('td');
      td.textContent = item[key];
      row.appendChild(td);
    }
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
}

const carTable = generateTable(cars);
document.body.appendChild(carTable);