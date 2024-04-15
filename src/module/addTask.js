import renderTasks from "./renderTasks.js";

export default function addTask(array) {
    const taskTitle = document.querySelector(".to_do_list_input").value.trim();

    const taskbody = {
        "title" : taskTitle,
        "completed": false
    }

   array.push(taskbody)

    console.log(array);
    renderTasks(array)
}