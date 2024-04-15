import renderTasks from "./renderTasks.js";

export default function removeTask(array, event) { 
    if (!event.target.classList.contains("to_do_delete_img")) return;
    const taskConteiner = event.target.closest(".to_do_task");
    const taskTitle = taskConteiner.querySelector('.to_do_title').textContent;
    const taskIndex = array.findIndex(item => item.title === taskTitle);
    array.splice(taskIndex, 1);


    renderTasks(array);
   }

  