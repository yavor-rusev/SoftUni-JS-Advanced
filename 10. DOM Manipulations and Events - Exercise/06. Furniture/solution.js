function solve() {
  const [generateTextareaRef, buyTextareaRef] = document.querySelectorAll('textarea');
  const [generateButtonRef, buyButtonRef] = document.querySelectorAll('button');

  generateButtonRef.addEventListener('click', generateTablerows);

  function generateTablerows() {
    let tableBodyRef = document.querySelector('tbody');
    let inputData = generateTextareaRef.value;
    let itemsArray = JSON.parse(inputData);

    for (let item of itemsArray) {
      let tableRowEl = document.createElement('tr');
      tableRowEl.appendChild(generateImgTdElement(item));
      tableRowEl.appendChild(generateNameTdElement(item));
      tableRowEl.appendChild(generatePriceTdElement(item));
      tableRowEl.appendChild(generateDecFactorTdElement(item));
      tableRowEl.appendChild(generateCheckboxTdElement(item));

      tableBodyRef.appendChild(tableRowEl);
    }
  }

  buyButtonRef.addEventListener('click', checkedRowsCollector);

  function checkedRowsCollector() {
    let checkboxheckedBoxesRefsArray = Array.from(document.querySelectorAll('[type="checkbox"]:checked'));
    let result = "Bought furniture: ";
    let namesArray = [];
    let totalPrice = 0;
    let avgDecFactor = 0;

    for (let checkbox of checkboxheckedBoxesRefsArray) {
      let row = checkbox.parentElement.parentElement;
      let rowTableData = row.children;

      let name = rowTableData[1].textContent;
      let price = Number(rowTableData[2].textContent);
      let decFactor = Number(rowTableData[3].textContent);

      namesArray.push(name);
      totalPrice += price;
      avgDecFactor += decFactor;
    }

    result += namesArray.join(', ');
    result += `\n`;
    result += `Total price: ${totalPrice.toFixed(2)}\n`;
    result += `Average decoration factor: ${avgDecFactor / checkboxheckedBoxesRefsArray.length}`;

    buyTextareaRef.value = result;
  }

  function generateImgTdElement(item) {
    let imgTdEl = document.createElement('td');
    imgTdEl.innerHTML = `<img src=${item.img}>`
    return imgTdEl;
  }

  function generateNameTdElement(item) {
    let nameTdEl = document.createElement('td');
    nameTdEl.innerHTML = `<p>${item.name}</p>`
    return nameTdEl;
  }

  function generatePriceTdElement(item) {
    let priceTdEl = document.createElement('td');
    priceTdEl.innerHTML = `<p>${item.price}</p>`
    return priceTdEl;
  }

  function generateDecFactorTdElement(item) {
    let decFactorTdEl = document.createElement('td');
    decFactorTdEl.innerHTML = `<p>${item.decFactor}</p>`
    return decFactorTdEl;
  }

  function generateCheckboxTdElement() {
    let checkBoxTdEl = document.createElement('td');
    checkBoxTdEl.innerHTML = `<input type="checkbox">`
    return checkBoxTdEl;
  }
}