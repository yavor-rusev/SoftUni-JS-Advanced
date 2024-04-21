function create(words) {
   const divRef = document.getElementById("content");

   for (let word of words) {
      let divEl = document.createElement("div");
      divEl.addEventListener("click", onClickHandler);

      let pEl = document.createElement("p");
      pEl.textContent = word;
      pEl.style.display = "none";

      divEl.appendChild(pEl);
      divRef.appendChild(divEl);
   }

   function onClickHandler(event) {
      let p = event.currentTarget.children[0];
      p.style.display = "block";
   }
}