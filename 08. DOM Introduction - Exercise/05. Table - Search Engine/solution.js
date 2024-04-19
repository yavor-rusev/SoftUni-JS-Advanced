function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchFieldRef = document.getElementById("searchField");
   const rowsCollection = document.querySelectorAll('tbody tr');

   function onClick() {      
      let searchedText = searchFieldRef.value;     

      for (let rowData of rowsCollection) {
         let cellsCollection = rowData.querySelectorAll('td');

         for (let cellData of cellsCollection) {
            if (cellData.textContent.includes(searchedText)) {
               rowData.classList.add('select');
               break;
            } else {
               rowData.classList.remove('select');
            }            
         }
      }

      searchFieldRef.value = "";
   }
}