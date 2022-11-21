let filters = ["","","","",""];

function setFilter(thisInput, thisIndex) {
  filters[thisIndex] = thisInput.value.toUpperCase();
  
  filterTable();
}

function filterTable() {
  var table = document.getElementById("myTable");
  var rows = Object.values(table.getElementsByTagName("tr"));
  
  for(var rowItr=1; rowItr < rows.length; rowItr++) {
    var row = rows[rowItr];
    var cells = Object.values(row.getElementsByTagName("td"));
    
    
    var isRowVisible = filters.every((filter, filterIndex) => {
        var cell = cells[filterIndex];
        var txtValue = cell.textContent || cell.innerText;

        return filter === "" || txtValue.toUpperCase().indexOf(filter) > -1;
    });
    
    row.style.display = isRowVisible ? "" : "none";
  };
}