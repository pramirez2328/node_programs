//write a program that does the following:
//given a string variable called 'strRates' which is a string delimited llist of numbers,  this list can be  of arbitrary length. The pattern is as follows:  '5.0,100,5.5,101,6,102:L10;5.0,99,5.5,100,6.0,101:L20'

//create the html table using javascript and display it on the screen
// the result should be to display an html table that looks something like this:
// 5.0 100 99
// 5.5 101 100
// 6.0 102 101
//remove L10 and L20 from the table
const createTable = (strRates) => {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  const rates = strRates.split(';');
  const ratesLength = rates.length;
  const rowLength = rates[0].split(',').length;
  for (let i = 0; i < ratesLength; i++) {
    const row = document.createElement('tr');
    const rowData = rates[i].split(',');
    for (let j = 0; j < rowLength; j++) {
      const cell = document.createElement('td');
      const cellText = document.createTextNode(rowData[j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
  document.body.appendChild(table);
};

const strRates = '5.0,100,5.5,101,6,102:L10;5.0,99,5.5,100,6.0,101:L20';
createTable(strRates);
