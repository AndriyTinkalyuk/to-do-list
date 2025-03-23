import renderTasks from "./renderTasks.js";

export default function addTask(array) {
    const taskInput = document.querySelector(".to_do_list_input");
    const taskTitle = taskInput.value.trim();

    if (taskTitle === "") {
        alert("Завдання не може бути пустим");
        return;
    }
    const taskbody = {
        "title" : taskTitle,
        "completed": false
    }

   array.push(taskbody)

    console.log(array);
    renderTasks(array)
    taskInput.value = '';
}