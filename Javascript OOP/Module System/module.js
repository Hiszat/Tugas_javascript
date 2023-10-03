import { DataTable } from './module1.js'; 

document.addEventListener('DOMContentLoaded', function () {
  const data = {
    1: { nama: "Fulan", alamat: "Jakarta" },
    2: { nama: "Fulanah", alamat: "Medan" }
  };

  const table = new DataTable({
    columns: ["Nama", "Alamat"],
    data: data
  });

  const tableContainer = document.getElementById('sebuahtable');
  table.render(tableContainer);

  table.allo();
});
