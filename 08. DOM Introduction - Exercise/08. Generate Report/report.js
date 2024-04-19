function generateReport() {
    let headRowArray = Array.from(document.querySelectorAll("thead tr th input"));
    let rowsArray = Array.from(document.querySelectorAll("tbody tr"));
    let outputRef = document.getElementById('output');

    let result = [];

    for (let currRow of rowsArray) {
        let currRowCellsArray = Array.from(currRow.querySelectorAll("td"));
        let currObj = {};

        for (let i = 0; i < headRowArray.length; i++) {
            let currCol = headRowArray[i];
            let currColName = currCol.name;
            let colIsChecked = currCol.checked;

            if (colIsChecked) {
                let currCell = currRowCellsArray[i];
                currObj[currColName] = currCell.textContent;
            }
        }

        result.push(currObj);
    }

    outputRef.textContent = JSON.stringify(result, null, 2);
}