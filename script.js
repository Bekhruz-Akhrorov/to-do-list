const input = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('taskList')

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const text = input.value.trim()
    if (text === '') return; 

    const li = document.createElement('li')
    const taskText = document.createElement('span')
    taskText.textContent = text;
    taskText.className = 'task-text';

    const btns = document.createElement('div')
    btns.className = 'task-buttons';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Done';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = () => taskText.classList.toggle('completed');

    const editBtn = document.createElement('button')
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => {
        const newText = prompt('Edit task:', taskText.textContent);
        if (newText && newText.trim() !== '') {
            taskText.textContent = newText.trim();
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => li.remove();

    btns.append(completeBtn, editBtn, deleteBtn);
    li.append(taskText, btns);
    list.appendChild(li)
    input.value = '';
}

function changeMode() {
    document.body.classList.toggle("light")
}