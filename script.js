document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Menambah task baru
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Event untuk menandai task sebagai selesai
    li.querySelector('span').addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Event untuk menghapus task
    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
    });

    // Menambahkan task ke dalam daftar
    taskList.appendChild(li);
    taskInput.value = ''; // Kosongkan input setelah menambah task
  }

  // Menangani klik pada tombol "Add Task"
  addTaskButton.addEventListener('click', addTask);

  // Menambahkan task dengan menekan Enter
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
