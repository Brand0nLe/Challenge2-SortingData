// import jsonData from '../data/data.json';

// const data = JSON.parse(jsonData);

// const tableBody = document.querySelector('#data-table tbody');
// const pagination = document.querySelector('#pagination');
// const resultsPerPage = document.querySelector('#results-per-page');
// const sortByButtons = document.querySelectorAll('#sort-by-container button');

// let currentPage = 1;
// let resultsPerPageValue = 10;
// let currentSortColumn = 'id';
// let isSortAscending = true;

// // Sorts the data by the specified column and order
// function sortData(column, isAscending) {
//   const order = isAscending ? 1 : -1;
//   return data.People.sort((a, b) => {
//     const valueA = a[column];
//     const valueB = b[column];
//     if (typeof valueA === 'string') {
//       return order * valueA.localeCompare(valueB);
//     }
//     return order * (valueA - valueB);
//   });
// }

// // Renders the table rows with the given data
// function renderTableRows(data) {
//   tableBody.innerHTML = '';
//   data.forEach((person) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${person.Id}</td>
//       <td>${person.FirstName}</td>
//       <td>${person.LastName}</td>
//       <td>${person.Email}</td>
//       <td>${person.Height}</td>
//       <td>${person.Age}</td>
//     `;
//     tableBody.appendChild(row);
//   });
// }

// // Renders the pagination links with the given total pages and current page
// function renderPagination(totalPages) {
//   pagination.innerHTML = '';
//   const previousLink = document.createElement('a');
//   previousLink.href = '#';
//   previousLink.innerText = 'Previous';
//   previousLink.addEventListener('click', () => {
//     if (currentPage > 1) {
//       currentPage--;
//       renderTablePage();
//       renderPagination(totalPages);
//     }
//   });
//   pagination.appendChild(previousLink);

//   for (let i = 1; i <= totalPages; i++) {
//     const pageLink = document.createElement('a');
//     pageLink.href = '#';
//     pageLink.innerText = i;
//     if (i === currentPage) {
//       pageLink.classList.add('active');
//     }
//     pageLink.addEventListener('click', () => {
//       currentPage = i;
//       renderTablePage();
//       renderPagination(totalPages);
//     });
//     pagination.appendChild(pageLink);
//   }

//   const nextLink = document.createElement('a');
//   nextLink.href = '#';
//   nextLink.innerText = 'Next';
//   nextLink.addEventListener('click', () => {
//     if (currentPage < totalPages) {
//       currentPage++;
//       renderTablePage();
//       renderPagination(totalPages);
//     }
//   });
//   pagination.appendChild(nextLink);
// }

// // Renders the table with the current page of data and updates the pagination links
// function renderTablePage() {
//   const sortedData = sortData(currentSortColumn, isSortAscending);
//   const startIndex = (currentPage - 1) * resultsPerPageValue;
//   const endIndex = startIndex + resultsPerPageValue;
//   const pageData = sortedData.slice(startIndex, endIndex);
//   renderTableRows(pageData);
//   const totalPages = Math.ceil(sortedData.length / resultsPerPageValue);
//   renderPagination(totalPages);
// }

// // Updates the table with the selected number of results per page
// resultsPerPage.addEventListener('change', () => {
//   resultsPerPageValue = parseInt(resultsPerPage.value);
//   currentPage = 1;
//   renderTablePage();
// });

// // Sorts the table by the clicked column and updates the sort order
// sortByButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//       const column = button.id.replace('sort-by-', '');
//       sortTableByColumn(column);
//     });
//   });
  
//   // Sorts the table by a given column
//   function sortTableByColumn(column) {
//     const tableRows = Array.from(dataTable.rows);
//     const isAscending = (sortOrder.column === column && sortOrder.order === 'asc');
  
//     // Sort the rows based on the selected column
//     tableRows.sort((row1, row2) => {
//       const value1 = row1.querySelector(`[data-column="${column}"]`).textContent;
//       const value2 = row2.querySelector(`[data-column="${column}"]`).textContent;
  
//       if (value1 < value2) {
//         return isAscending ? -1 : 1;
//       } else if (value1 > value2) {
//         return isAscending ? 1 : -1;
//       } else {
//         return 0;
//       }
//     });
  
//     // Remove the current rows from the table
//     for (let i = 1; i < dataTable.rows.length; i++) {
//       dataTable.deleteRow(i);
//     }
  
//     // Add the sorted rows back to the table
//     tableRows.forEach((row) => {
//       dataTable.appendChild(row);
//     });
  
//     // Update the sort order
//     sortOrder.column = column;
//     sortOrder.order = isAscending ? 'desc' : 'asc';
  
//     // Update the sort button styles
//     sortByButtons.forEach((button) => {
//       if (button.id === `sort-by-${column}`) {
//         button.classList.toggle('active');
//         button.classList.toggle(sortOrder.order === 'asc' ? 'btn-primary' : 'btn-secondary');
//       } else {
//         button.classList.remove('active', 'btn-primary');
//         button.classList.add('btn-secondary');
//       }
//     });
//   }
  



// import data from '../data/data.json';

// const resultsPerPageSelect = document.querySelector('#results-per-page');
// const peopleTableBody = document.querySelector('#people-table-body');
// const sortLinks = document.querySelectorAll('.sort-link');
// const pagination = document.querySelector('#pagination');

// const resultsPerPage = parseInt(resultsPerPageSelect.value, 10);
// let currentPage = 1;
// let currentSortBy = 'Id';
// let isSortAscending = true;

// function renderTable() {
//   // Parse the data from the JSON file
//   const parsedData = JSON.parse(JSON.stringify(data));
  
//   // Sort the data based on the current sort field and order
//   const sortedData = parsedData.People.sort((a, b) => {
//     const aValue = a[currentSortBy];
//     const bValue = b[currentSortBy];
//     if (aValue < bValue) {
//       return isSortAscending ? -1 : 1;
//     } else if (aValue > bValue) {
//       return isSortAscending ? 1 : -1;
//     } else {
//       return 0;
//     }
//   });

//   // Calculate the start and end indexes of the current page
//   const startIndex = (currentPage - 1) * resultsPerPage;
//   const endIndex = Math.min(startIndex + resultsPerPage, sortedData.length);

//   // Clear the current table rows
//   peopleTableBody.innerHTML = '';

//   // Render the table rows for the current page
//   for (let i = startIndex; i < endIndex; i++) {
//     const person = sortedData[i];
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${person.Id}</td>
//       <td>${person.FirstName}</td>
//       <td>${person.LastName}</td>
//       <td>${person.Email}</td>
//       <td>${person.Height}</td>
//       <td>${person.Age}</td>
//     `;
//     peopleTableBody.appendChild(row);
//   }

//   // Render the pagination links
//   const numPages = Math.ceil(sortedData.length / resultsPerPage);
//   pagination.innerHTML = '';
//   for (let i = 1; i <= numPages; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     a.href = '#';
//     a.innerText = i;
//     if (i === currentPage) {
//       li.classList.add('active');
//     }
//     a.addEventListener('click', (event) => {
//       event.preventDefault();
//       currentPage = i;
//       renderTable();
//     });
//     li.appendChild(a);
//     pagination.appendChild(li);
//   }
// }

// function handleResultsPerPageChange() {
//   currentPage = 1;
//   resultsPerPage = parseInt(resultsPerPageSelect.value, 10);
//   renderTable();
// }

// function handleSortLinkClick(event) {
//   event.preventDefault();
//   const sortBy = event.target.dataset.sortBy;
//   if (sortBy === currentSortBy) {
//     isSortAscending = !isSortAscending;
//   } else {
//     currentSortBy = sortBy;
//     isSortAscending = true;
//   }
//   currentPage = 1;
//   renderTable();
// }

// resultsPerPageSelect.addEventListener('change', handleResultsPerPageChange);
// sortLinks.forEach((sortLink) => {
//   sortLink.addEventListener('click', handleSortLinkClick);
// });


import { getData } from './data.js';

const resultsPerPageSelect = document.querySelector('#results-per-page');
const peopleTableBody = document.querySelector('#people-table-body');
const sortLinks = document.querySelectorAll('.sort-link');
const pagination = document.querySelector('#pagination');

let resultsPerPage = parseInt(resultsPerPageSelect.value, 10);
let currentPage = 1;
let currentSortBy = 'Id';
let isSortAscending = true;

function renderTable(data) {
  // Sort the data based on the current sort field and order
  const sortedData = data.People.sort((a, b) => {
    const aValue = a[currentSortBy];
    const bValue = b[currentSortBy];
    if (aValue < bValue) {
      return isSortAscending ? -1 : 1;
    } else if (aValue > bValue) {
      return isSortAscending ? 1 : -1;
    } else {
      return 0;
    }
  });

  // Calculate the start and end indexes of the current page
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, sortedData.length);

  // Clear the current table rows
  peopleTableBody.innerHTML = '';

  // Render the table rows for the current page
  for (let i = startIndex; i < endIndex; i++) {
    const person = sortedData[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${person.Id}</td>
      <td>${person.FirstName}</td>
      <td>${person.LastName}</td>
      <td>${person.Email}</td>
      <td>${person.Height}</td>
      <td>${person.Age}</td>
    `;
    peopleTableBody.appendChild(row);
  }

  // Render the pagination links
  const numPages = Math.ceil(sortedData.length / resultsPerPage);
  pagination.innerHTML = '';
  for (let i = 1; i <= numPages; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.innerText = i;
    if (i === currentPage) {
      li.classList.add('active');
    }
    a.addEventListener('click', (event) => {
      event.preventDefault();
      currentPage = i;
      renderTable(data);
    });
    li.appendChild(a);
    pagination.appendChild(li);
  }
}

function handleResultsPerPageChange(data) {
  currentPage = 1;
  resultsPerPage = parseInt(resultsPerPageSelect.value, 10);
  renderTable(data);
}

function handleSortLinkClick(data, event) {
  event.preventDefault();
  const sortBy = event.target.dataset.sortBy;
  if (sortBy === currentSortBy) {
    isSortAscending = !isSortAscending;
  } else {
    currentSortBy = sortBy;
    isSortAscending = true;
  }
  currentPage = 1;
  renderTable(data);
}

getData()
  .then((data) => {
    renderTable(data);
    resultsPerPageSelect.addEventListener('change', () => handleResultsPerPageChange(data));

    sortLinks.forEach((sortLink) => {
      sortLink.addEventListener('click', (event) => handleSortLinkClick(data, event));
    });
  })
  .catch((error) => {
    console.error(error);
  });