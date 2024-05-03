// Define an empty array to store todo items
let todoList = [];

// Function to add a new todo item
function addTodo() {
  // Get the input element by its ID
  const input = document.getElementById("todoInput");

  const todoText = input.value.trim();
  // Check if the input value is not empty
  if (todoText !== "") {
    // Add the todo item
    todoList.push({ text: todoText, completed: false });
    // Render the updated todo list
    renderTodoList();
    // Clear the input field
    input.value = "";
  }
}

// Function to toggle the completion status of a todo item
function toggleCompleted(index) {
  todoList[index].completed = !todoList[index].completed;
  renderTodoList();
}

// Function to delete a todo item
function deleteTodo(index) {
  // Remove the todo item at the given index from the todoList array
  todoList.splice(index, 1);
  // Render the updated todo list
  renderTodoList();
}

// Function to filter and render todo items based on their completion status
function toggleTasks(status) {
  // Check if todoList exists
  if (todoList) {
    let list;
    // Filter the todoList based on the specified status ("completed" or "incomplete")
    if (status == "completed") {
      list = todoList.filter((a) => a.completed);
    } else if (status == "incomplete") {
      list = todoList.filter((a) => !a.completed);
    }
    // Render the filtered todo list
    renderTodoList(list);
  }
}

// Function to render the todo list
function renderTodoList(todolists = todoList) {
  // Get the container element for the todo list
  const todoListContainer = document.getElementById("todoList");
  // Clear the container before rendering the todo list
  todoListContainer.innerHTML = "";
  // Loop through each todo item in the list and create HTML elements to display them
  todolists.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    // Add "completed" class if the todo item is marked as completed
    if (todo.completed) {
      todoItem.classList.add("completed");
    }
    // Create a checkbox input element for toggling completion status
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    // Add event listener to toggle completion status when checkbox is changed
    checkbox.addEventListener("change", () => toggleCompleted(index));
    // Create a span element to display the todo text
    const todoText = document.createElement("span");
    todoText.textContent = todo.text;
    // Create a delete button to delete the todo item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "delete-btn");
    // Add event listener to delete the todo item when delete button is clicked
    deleteBtn.addEventListener("click", () => deleteTodo(index));
    // Append the checkbox, todo text, and delete button to the todo item container
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);
    // Append the todo item container to the todo list container
    todoListContainer.appendChild(todoItem);
  });
  // Update the total tasks count display
  document.getElementById("totalTasks").textContent = `${completedTask()}/${
    todoList.length
  }`;
}

// Function to count the number of completed tasks
function completedTask() {
  let counter = 0;
  // Check if todoList exists
  if (todoList) {
    todoList.forEach((e) => {
      if (e.completed) {
        counter++;
      }
    });
  }
  return counter;
}
