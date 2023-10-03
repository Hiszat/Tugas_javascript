export class DataTable {
    constructor(init) {
      this.init = init;
    }
  
    createHeader(columns) {
      const thElements = columns.map((column) => `<th>${column}</th>`).join('');
      return `<thead><tr>${thElements}</tr></thead>`;
    }
  
    createBody(data) {
      const trElements = Object.values(data).map((rowData) => `
        <tr>
          <td>${rowData.nama}</td>
          <td>${rowData.alamat}</td>
        </tr>`).join('');
      return `<tbody>${trElements}</tbody>`;
    }
  
    allo(){
      console.log("Hi mom");
    }
    render(element) {
      const table = `
        <table class='table table-hover'>
          ${this.createHeader(this.init.columns)}
          ${this.createBody(this.init.data)}
        </table>`;
      element.innerHTML = table;
    }
}
  

