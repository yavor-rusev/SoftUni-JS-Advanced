function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let resultContainerRef = document.getElementById('result');

  let textToLowerCase = text.toLowerCase();
  let wordArray = textToLowerCase.split(" ");
  let result = '';

  switch (convention) {
    case "Camel Case":
      result = wordArray.shift();

      for (let word of wordArray) {
        result += word[0].toUpperCase() + word.substring(1);
      }; break;

    case "Pascal Case":
      for (let word of wordArray) {
        result += word[0].toUpperCase() + word.substring(1);
      }; break;

    default: result = 'Error!';
  }

  resultContainerRef.textContent = result;
}