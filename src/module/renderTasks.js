export default function renderTasks(array) {
    const TasksConteiner = document.querySelector(".to_do_list_display");
    TasksConteiner.innerHTML = "";
array.forEach( (element, index) => {
    TasksConteiner.insertAdjacentHTML(
        "afterbegin",
    `  <div class='to_do_task'>
        <span>${index + 1}</span>
        <div class='to_do_title'>${element.title}</div> 
        <div class='to_do_check'><img src="../../icons/check.png" alt="check" class="to_do_check_img"></div>
        <div class='to_do_delete'><img src="../../icons/trash.png" alt="check" class="to_do_delete_img"></div>   
        </div>`
    )
    if (element.completed === true) {
        const taskItem = TasksConteiner.querySelector('.to_do_task');
        taskItem.classList.add('completed');
    }
});

}