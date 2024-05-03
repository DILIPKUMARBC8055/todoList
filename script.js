let todoList = [];

function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value.trim();
  if (todoText !== "") {
    todoList.push({ text: todoText, completed: false });
    renderTodoList();
    input.value = "";
  }
}

function toggleCompleted(index) {
  todoList[index].completed = !todoList[index].completed;
  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}
function toggleTasks(status) {
  if (todoList) {
    let list;
    if (status == "completed") {
      list = todoList.filter((a) => a.completed);
    } else if (status == "incomplete") {
      list = todoList.filter((a) => !a.completed);
    }

    renderTodoList(list);
  }
}
function renderTodoList(todolists = todoList) {
  const todoListContainer = document.getElementById("todoList");
  todoListContainer.innerHTML = "";
  todolists.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    if (todo.completed) {
      todoItem.classList.add("completed");
    }
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleCompleted(index));
    const todoText = document.createElement("span");
    todoText.textContent = todo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "delete-btn");
    deleteBtn.addEventListener("click", () => deleteTodo(index));
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);
    todoListContainer.appendChild(todoItem);
  });
  document.getElementById("totalTasks").textContent = `${completedTask()}/${
    todoList.length
  }`;
}
function completedTask() {
  let counter = 0;
  if (todoList) {
    todoList.forEach((e) => {
      if (e.completed) {
        counter++;
      }
    });
  }
  return counter;
}
