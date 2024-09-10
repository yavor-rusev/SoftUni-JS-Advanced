window.addEventListener("load", solve);

function solve() {
  const colorsRef = document.getElementById("colors");
  const modelRef = document.getElementById("motorcycles");
  const dateAndTimeRef = document.getElementById("datetime");
  const fullNameRef = document.getElementById("full-name");
  const emailRef = document.getElementById("email");
  const testBtn = document.getElementById("test-ride-btn");

  testBtn.addEventListener("click", onTest);

  const form = document.querySelector("form");

  const previewListRef = document.getElementById("preview-list");
  const completeListRef = document.getElementById("complete-list");
  const rideBtnDivRef = document.querySelector(".data-view");

  function onTest(event) {
    event.preventDefault();

    const color = colorsRef.value;
    const model = modelRef.value;
    const dateAndTime = dateAndTimeRef.value;
    const fullName = fullNameRef.value;
    const email = emailRef.value;

    if (!color || !model || !dateAndTime || !fullName || !email) {
      return
    }

    const liTemplate = createLi(color, model, dateAndTime, fullName, email);
    previewListRef.appendChild(liTemplate);

    form.reset();
    testBtn.disabled = true;
  }

  function onEdit(event) {
    const [colorParRef, modelParRef, fullNameParRef, emailParRef, dateAndTimePar] = event.target.parentElement.parentElement.querySelector("article").children;

    const color = colorParRef.textContent.replace("Color: ", "");
    const model = modelParRef.textContent.replace("Model: ", "");
    const fullName = fullNameParRef.textContent.replace("For: ", "");
    const email = emailParRef.textContent.replace("Contact: ", "");
    const dateAndTime = dateAndTimePar.textContent.replace("Test Ride On: ", "");

    colorsRef.value = color;
    modelRef.value = model;
    dateAndTimeRef.value = dateAndTime;
    fullNameRef.value = fullName;
    emailRef.value = email;

    previewListRef.innerHTML = "";
    testBtn.disabled = false;
  }

  function onNext(event) {
    const li = event.target.parentElement.parentElement;
    const [article, btnContainer] = li.children;

    btnContainer.remove();

    const completeBtn = createBtn("Complete", "complete-btn");
    completeBtn.addEventListener("click", onComplete);
    article.appendChild(completeBtn);

    completeListRef.appendChild(li);
  }

  function onComplete(event) {
    completeListRef.innerHTML = "";

    const rideBtn = createBtn("Your Test Ride is Confirmed", "confirm-btn");
    rideBtn.addEventListener("click", () => window.location.reload());

    rideBtnDivRef.appendChild(rideBtn);
  }

  function createLi(color, model, dateAndTime, fullName, email) {
    const li = document.createElement("li");

    const article = document.createElement("article");

    const colorPar = createPar("Color: ", color)
    article.appendChild(colorPar);

    const modelPar = createPar("Model: ", model)
    article.appendChild(modelPar);

    const fullNamePar = createPar("For: ", fullName)
    article.appendChild(fullNamePar);

    const emailPar = createPar("Contact: ", email)
    article.appendChild(emailPar);

    const dateAndTimePar = createPar("Test Ride On: ", dateAndTime)
    article.appendChild(dateAndTimePar);

    const divBtnContainer = createBtnContainer("btn-container");

    li.appendChild(article);
    li.appendChild(divBtnContainer);

    return li;
  }

  function createBtnContainer(classes) {
    const div = document.createElement("div");
    div.classList.add(classes);

    const editBtn = createBtn("Edit", "edit-btn");
    editBtn.addEventListener("click", onEdit);
    div.appendChild(editBtn);

    const continueBtn = createBtn("Next", "next-btn");
    continueBtn.addEventListener("click", onNext);
    div.appendChild(continueBtn);

    return div;
  }

  function createPar(name, text) {
    const p = document.createElement("p");
    p.textContent = `${name}${text}`;

    return p;
  }

  function createBtn(text, classes) {
    const btn = document.createElement("button");
    btn.textContent = text;

    if (classes) {
      btn.classList.add(classes);
    }

    return btn;
  }
}
