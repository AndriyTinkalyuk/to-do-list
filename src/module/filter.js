export default function filter() { 
    const filterValue = document.querySelector('.to_do_list_select').value;
    const tasksList = [...document.getElementsByClassName('to_do_task')];

    tasksList.forEach(task => {
        switch(filterValue) { 
            case 'completed':
                if (!task.classList.contains('completed')) {
                    task.style.display = 'none';
                } else {
                    task.style.display = 'flex';
                }
                break;
            case 'incomplete':
                if (task.classList.contains('completed')) {
                    task.style.display = 'none';
                } else {
                    task.style.display = 'flex';
                }
                break;
            case 'all':
                task.style.display = 'flex';
                break;
        }
    });
}
