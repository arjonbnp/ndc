const form = document.getElementById('crimeForm');
const tableBody = document.querySelector('#crimeTable tbody');
const searchInput = document.getElementById('searchInput');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const caseId = document.getElementById('caseId').value;
  const type = document.getElementById('crimeType').value;
  const location = document.getElementById('location').value;
  const date = document.getElementById('date').value;
  const description = document.getElementById('description').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${caseId}</td>
    <td>${type}</td>
    <td>${location}</td>
    <td>${date}</td>
    <td>${description}</td>
  `;

  tableBody.appendChild(row);
  form.reset();
});

searchInput.addEventListener('keyup', function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll('#crimeTable tbody tr');
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? '' : 'none';
  });
});
