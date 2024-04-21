function notify(message) {
  const targetDivRef = document.getElementById("notification");


  targetDivRef.textContent = message;
  targetDivRef.style.display = "block";
  targetDivRef.addEventListener("click", hideMessage);

  function hideMessage(event) {
    let divWithMessage = event.currentTarget;
    divWithMessage.style.display = "none";
  }
}