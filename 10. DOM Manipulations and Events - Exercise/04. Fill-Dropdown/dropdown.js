function addItem() {
    let [inputText, inputValue] = document.querySelectorAll('[type="text"]');
    let selectRef = document.getElementById('menu');

    let optionEl = document.createElement('option');
    optionEl.textContent = inputText.value;
    optionEl.value = inputValue.value;

    selectRef.appendChild(optionEl);

    inputText.value = '';
    inputValue.value = '';
}