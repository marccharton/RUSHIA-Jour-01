// Données "in-memory" simulées (JSON-like) pour démarrer avec quelques tâches
const initialTasks = [
  { id: 1, label: "Configurer le projet dans Cursor", done: true },
  { id: 2, label: "Relire le README du rush", done: false },
  { id: 3, label: "Tester l’ajout / suppression de tâches", done: false }
];

let tasks = [...initialTasks];
let nextId = initialTasks.length + 1;

const todoListEl = document.getElementById("todo-list");
const doneListEl = document.getElementById("done-list");
const formEl = document.getElementById("task-form");
const inputEl = document.getElementById("task-input");

/**
 * Crée un élément <li> pour une tâche
 */
function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = "task-item" + (task.done ? " task-item--done" : "");
  li.dataset.id = task.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;
  checkbox.addEventListener("change", () => toggleTask(task.id));

  const label = document.createElement("span");
  label.className =
    "task-label" + (task.done ? " task-label--done" : "");
  label.textContent = task.label;

  const meta = document.createElement("span");
  meta.className = "task-meta";
  meta.textContent = task.done ? "terminée" : "à faire";

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(meta);

  return li;
}

/**
 * Rendu complet de la liste des tâches
 * Séparation visuelle : "À faire" / "Terminées"
 */
function renderTasks() {
  // On vide les listes
  todoListEl.innerHTML = "";
  doneListEl.innerHTML = "";

  tasks.forEach((task) => {
    const li = createTaskElement(task);

    if (task.done) {
      doneListEl.appendChild(li);
    } else {
      todoListEl.appendChild(li);
    }
  });
}

/**
 * Ajoute une nouvelle tâche à partir du champ texte
 */
function addTask(label) {
  const trimmed = label.trim();
  if (!trimmed) return;

  const newTask = {
    id: nextId++,
    label: trimmed,
    done: false
  };

  tasks = [newTask, ...tasks];
  renderTasks();
}

/**
 * Inverse l’état "done" d’une tâche
 */
function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  renderTasks();
}

/**
 * Gestion du formulaire d’ajout
 */
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(inputEl.value);
  inputEl.value = "";
  inputEl.focus();
});

// Premier rendu
renderTasks();


