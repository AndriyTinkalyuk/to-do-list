import renderTasks from "./module/renderTasks.js";
import removeTask from "./module/removeTask.js";
import checkTask from "./module/checkTask.js";
import addTask from "./module/addTask.js";
import filter from "./module/filter.js";

const taskButton = document.querySelector('.to_do_list_button');
const filterSelect = document.querySelector('.to_do_list_filter');
const todo_display = document.querySelector('.to_do_list_display')

const tasksList = [];


todo_display.addEventListener("click", (event) => removeTask(tasksList, event));
todo_display.addEventListener("click", (event) => checkTask(tasksList, event));
filterSelect.addEventListener("change", filter);
taskButton.addEventListener("click", () => addTask(tasksList));



window.addEventListener('beforeunload', () => {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
});

window.addEventListener('load', () => {
    const raw = localStorage.getItem("tasks");
    const tasks = JSON.parse(raw);
    if (tasks) {
        tasksList.push(...tasks);
        renderTasks(tasksList);
    }
});
