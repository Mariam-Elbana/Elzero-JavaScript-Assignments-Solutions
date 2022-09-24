// Challenge Lesson 114

let addTask = document.querySelector(".input");
let addButton = document.querySelector(".add");
let divResult = document.querySelector(".tasks");

function doSomeTask(e) {
    let addTaskCheck = false;

    if (addTask.value !== "") {
        addTaskCheck = true;

        // Create Task
        window.localStorage.setItem("task", addTask.value);
        let divTask = document.createElement("div");
        divTask.setAttribute("class", "div-task");
        let divTaskText = document.createTextNode(
            `${window.localStorage.getItem("task")}`
        );
        let divTaskButton = document.createElement("button");
        divTaskButton.setAttribute("class", "button-task");
        let divTaskButtonText = document.createTextNode(`Delete`);
        divResult.appendChild(divTask);
        divTask.appendChild(divTaskText);
        divTask.appendChild(divTaskButton);
        divTaskButton.appendChild(divTaskButtonText);

        // Remove Task When User Click The Delete Button and Remove From Local Storage
        divTaskButton.onclick = function () {
            divTask.remove();
            window.localStorage.removeItem("task");
        };
    }

    // Empty The Input When The User Exist From It
    addTask.value = "";

    // When User Click On "Add Task" Button And The Input Form Empty
    if (addTaskCheck === false) {
        e.preventDefault();
    }
}

addButton.onclick = doSomeTask;

if (window.localStorage.getItem("task")) {
    let divTask = document.createElement("div");
    divTask.setAttribute("class", "div-task");
    let divTaskText = document.createTextNode(
        `${window.localStorage.getItem("task")}`
    );
    let divTaskButton = document.createElement("button");
    divTaskButton.setAttribute("class", "button-task");
    let divTaskButtonText = document.createTextNode(`Delete`);
    divResult.appendChild(divTask);
    divTask.appendChild(divTaskText);
    divTask.appendChild(divTaskButton);
    divTaskButton.appendChild(divTaskButtonText);

    divTaskButton.onclick = function () {
        divTask.remove();
        window.localStorage.removeItem("task");
    };
}