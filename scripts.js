function addTask() {
    const taskInput = document.getElementById('taskInput');
    const categoryInput = document.getElementById('categoryInput');
    const taskText = taskInput.value;
    const category = categoryInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.onclick = () => {
        taskItem.classList.toggle('completed');
    };

    if (category === 'Personal') {
        document.getElementById('personalTasks').appendChild(taskItem);
    } else if (category === 'Work') {
        document.getElementById('workTasks').appendChild(taskItem);
    } else if (category === 'Learning') {
        document.getElementById('learningTasks').appendChild(taskItem);
    }

    taskInput.value = '';
}
