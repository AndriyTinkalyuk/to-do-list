export default function renderTasks(array) {
    const tasksConteiner = document.querySelector(".to_do_list_display");
    tasksConteiner.innerHTML = "";
array.forEach( (element, index) => {
    tasksConteiner.insertAdjacentHTML(
       "beforeend",
    `  <div class='to_do_task ${element.completed === true ? "completed" : ""}'>
        <span>${index + 1}.</span>
        <div class='to_do_title'>${element.title}</div> 
        <div class='to_do_check'><img src="./icons/check.png" alt="check" class="to_do_check_img"></div>
        <div class='to_do_delete'><img src="./icons/trash.png" alt="check" class="to_do_delete_img"></div>   
        </div>`
    )
});

}