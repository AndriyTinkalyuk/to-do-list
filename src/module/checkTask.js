   import renderTasks from "./renderTasks.js";

   export default function checkTask(array, event) { 
      if (!event.target.classList.contains("to_do_check_img")) return;
      const taskBody = event.target.closest(".to_do_task");
      const taskTitle = taskBody.querySelector('.to_do_title').textContent;
      const taskIndex = array.findIndex(item => item.title === taskTitle);


      array[taskIndex].completed = !array[taskIndex].completed;
;


      renderTasks(array);
   }

  