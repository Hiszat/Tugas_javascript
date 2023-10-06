import { DataTable } from './module1.js'; 
import { getData } from './async.js';

function load(){
  return `<table class='table table-hover'>
  <tr><center><td><b>Loading...</b></td></center></tr>
  </table>`
}

document.addEventListener('DOMContentLoaded', function () {
  const tableContainer = document.getElementById('sebuahtable');
  tableContainer.innerHTML = load();

  getData("https://jsonplaceholder.typicode.com/users", function(data) {
    const table = new DataTable({
      columns: ["ID", "Name","Username", "Email"],
      data: data
    });

    tableContainer.innerHTML = '';
    table.render(tableContainer);
  });

});
