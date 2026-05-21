const taskInput = document.getElementById('task-input');
const taskButton = document.getElementById('task-button');
const taskList = document.getElementById('task-list');

// Função auxiliar para criar qualquer elemento HTML
function createElement(tag) {
    return document.createElement(tag);
}

// Configura o botão de apagar e o anexa à li
function createDeleteButton(button, li) {
    button.innerText = 'Apagar';
    // Define a classe CSS para estilização e identificação posterior
    button.setAttribute('class', 'delet-task');
    // Adiciona uma dica visual ao passar o mouse
    button.setAttribute('title', 'Apagar tarefa');
    li.appendChild(button);
}

function addTask(taskText) {
    const li = createElement('li');
    const button = createElement('button');

    li.innerText = taskText;
    createDeleteButton(button, li);
    taskList.appendChild(li);

    clearInput();
    saveTasks(); // Persiste a nova lista no navegador
}

function clearInput() {
    taskInput.value = '';
    taskInput.focus(); // Devolve o cursor para o campo de texto
}

function saveTasks() {
    const listTasks = taskList.querySelectorAll('li');
    let listArray = [];

    for (let task of listTasks) {
        // Remove o texto do botão para salvar apenas a descrição da tarefa
        let taskText = task.innerText.replace('Apagar', '').trim();
        listArray.push(taskText);
    }

    // Converte o Array em uma String formatada (JSON)
    const tasksJSON = JSON.stringify(listArray);
    // Salva a String no banco de dados local do navegador
    localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    if (!tasks) return; // Evita erro caso não existam tarefas salvas

    // Converte a String JSON de volta para um Array de JavaScript
    const tasksList = JSON.parse(tasks);

    for (let task of tasksList) {
        addTask(task);
    }
}

// Captura a tecla Enter para disparar o clique do botão
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        taskButton.click();
    }
});

// Delegação de eventos para cliques no documento
document.addEventListener('click', (e) => {
    const el = e.target;

    // Lógica para o botão de adicionar
    if (el.id === 'task-button') {
        if (!taskInput.value) return;
        addTask(taskInput.value);
    }

    // Lógica para o botão de apagar (identificado pela classe)
    if (el.classList.contains('delet-task')) {
        // Remove o elemento pai (a <li>) do botão clicado
        el.parentElement.remove();
        saveTasks(); // Atualiza o localStorage após a remoção
    }
});

// Inicializa a lista com o que estiver salvo no LocalStorage
addSavedTasks();