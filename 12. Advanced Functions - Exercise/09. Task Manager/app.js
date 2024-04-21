function solve() {
    const taskInputRef = document.getElementById("task");
    const descriptionInputRef = document.getElementById("description");
    const dateInputRef = document.getElementById("date");
    const addButtonRef = document.getElementById("add");
    addButtonRef.addEventListener("click", addTaskOnClick);

    const [addRef, openRef, inProgressRef, completeRef] = document.querySelectorAll("section");

    function addTaskOnClick(event) {
        event.preventDefault();

        let task = taskInputRef.value;
        let description = descriptionInputRef.value;
        let date = dateInputRef.value;

        if (!(task && description && date)) {
            return;
        };

        let divTargetRef = openRef.children[1];
        divTargetRef.innerHTML += createArticle(task, description, date);

        let articleRef = divTargetRef.children[divTargetRef.children.length - 1];
        articleRef.innerHTML += createDivElement();

        let divWithButtonsRef = articleRef.children[3];
        divWithButtonsRef.innerHTML += createButton("green", "Start");
        divWithButtonsRef.innerHTML += createButton("red", "Delete");

        let articlesArray = Array.from(document.querySelectorAll("article"));
        articlesArray.forEach(article => article.addEventListener("click", manageTaskArticle));

        taskInputRef.value = "";
        descriptionInputRef.value = "";
        dateInputRef.value = "";
    }

    function manageTaskArticle(event) {
        let action = event.target.textContent;

        switch (action) {
            case "Start": moveToInProgress(event); break;
            case "Delete": deleteTask(event); break;
            case "Finish": moveToComplete(event); break;
        }
    }

    function moveToComplete(event) {
        let buttonsDivRef = event.currentTarget.children[3];
        buttonsDivRef.remove();

        let divToMoveToRef = completeRef.children[1];
        divToMoveToRef.appendChild(event.currentTarget);
    }

    function moveToInProgress(event) {
        let buttonsDivRef = event.currentTarget.children[3];

        let startBtnRef = buttonsDivRef.children[0];
        startBtnRef.remove();

        buttonsDivRef.innerHTML += createButton("orange", "Finish");

        let divToMoveToRef = inProgressRef.children[1];
        divToMoveToRef.appendChild(event.currentTarget);
    }

    function deleteTask(event) {
        event.currentTarget.remove();
    }

    function createArticle(task, description, date) {
        return `<article>
        <h3>${task}</h3>
        <p>Description: ${description}</p>
        <p>Due Date: ${date}</p>
    </article>`;
    }

    function createButton(btnClass, btnText) {
        return `<button class="${btnClass}">${btnText}</button>`;
    }

    function createDivElement() {
        return `<div class="flex"></div>`;
    }
}