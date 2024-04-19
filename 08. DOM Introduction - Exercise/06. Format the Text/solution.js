function solve() {
  let inputText = document.getElementById("input").value;
  let outputContainerRef = document.getElementById("output");
  outputContainerRef.innerHTML = "";

  let sentencesArray = inputText.split(".");
  let validSentencesArray = [];

  for (let sentence of sentencesArray) {
    let isEmpty = sentence.split('').every(x => x === " ");

    if (!isEmpty && sentence !== "") {
      validSentencesArray.push(sentence);
    }
  }

  let paragraghText = '';
  let counter = 0;

  for (let i = 0; i < validSentencesArray.length; i++) {
    let currSentence = validSentencesArray[i];
    paragraghText += currSentence + '.'
    counter++;

    if (counter === 3) {
      let p = document.createElement('p');
      p.textContent = paragraghText;
      outputContainerRef.appendChild(p);

      paragraghText = '';
      counter = 0;
    }
  }

  if (counter !== 0) {
    let p = document.createElement('p');
    p.textContent = paragraghText;
    outputContainerRef.appendChild(p);
  }
}