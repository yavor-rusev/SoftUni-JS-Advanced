function search() {
   let searchedText = document.getElementById('searchText').value;
   let resultContainerRef = document.getElementById('result');
   let townsArray = Array.from(document.querySelectorAll('#towns>li'));
   let matches = 0;

   for (let townObj of townsArray) {
      let townName = townObj.textContent;

      if (townName.includes(searchedText)) {
         townObj.style['font-weight'] = "bold";
         townObj.style['text-decoration'] = 'underline';
         matches++;
      } else {
         townObj.style['font-weight'] = "none";
         townObj.style['text-decoration'] = 'none';
      }
   }

   resultContainerRef.textContent = `${matches} matches found`;
}
