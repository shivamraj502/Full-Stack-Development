// Day 14: Mini Project → To-Do List App.

function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText;

    li.onclick = function () {
        li.remove();
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}