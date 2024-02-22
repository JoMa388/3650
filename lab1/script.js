function createTask() {
  // Get input, Create task elements
  const taskInput = document.querySelector("#taskInput"); //Input Selector
  const taskList = document.querySelector("#taskList"); //Task Item Container

  // Creation of Each Task element
  let taskItem = document.createElement("li");
  let checkbox = document.createElement("input");
  let task = document.createElement("label");
  let editTask = document.createElement("input");
  let editBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  let dateLabel = document.createElement("label");
  let date = document.createElement("input");
  let btnDiv = document.createElement("div");
  let dateDiv = document.createElement("div");

  // Assigning proper type, Assign ID to Delete and Edit Button
  checkbox.type = "checkbox";
  editTask.type = "text";
  date.type = "date";
  editBtn.innerText = "Edit";
  deleteBtn.innerText = "Delete";
  editBtn.id = "Edit";
  deleteBtn.id = "Delete";
  task.innerText = taskInput.value; // Passed Input value to be displayed
  dateLabel.innerText = "Due:";

  // BootStrap Styling Classes added
  taskItem.classList.add("row", "d-flex", "mb-3");
  checkbox.classList.add("col-1", "checkbox", "mt-2", "ms-4");
  task.classList.add("fs-3", "col-3", "text-center");
  editTask.classList.add("d-none");
  btnDiv.classList.add("col-3");
  editBtn.classList.add("btn", "btn-outline-success", "me-3");
  deleteBtn.classList.add("btn", "btn-outline-danger");
  dateDiv.classList.add("col-5", "d-flex", "justify-content-evenly");
  dateLabel.classList.add("fs-3");
  date.classList.add("text-center", "fs-5", "border-0", "rounded", "bg-light");

  // Add Delete Function to button
  deleteBtn.setAttribute("onclick", "deleteItem(this)");
  date.value = todayDate(); // Set Due Date to Current Date, calls todayDate()

  // Append edit & delete button to its div container
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  // Append date label and dtae to its div container
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(date);

  // Append each part of task to its li Container
  taskItem.appendChild(checkbox);
  taskItem.appendChild(task);
  taskItem.appendChild(editTask);
  taskItem.appendChild(btnDiv);
  taskItem.appendChild(dateDiv);

  // Append The task li to the Ul container
  taskList.appendChild(taskItem);
}
function addTask() {
  createTask();
}

function todayDate() {
  // Gets new Date and formats into a string that date input accepts as value
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  let today = year + "-" + month + "-" + day;
  return today;
}

function deleteItem(element) {
  let btnContainer = element.parentNode;
  let item = btnContainer.parentNode;
  let ul = item.parentNode;
  ul.removeChild(item);
}

function completeTask(element) {
  let taskItem = element.parentNode;
  const completedTasks = document.querySelector("#completedTasks");
  const taskList = document.querySelector("#taskList"); //Task Item Container

  if (taskItem.parentNode == taskList) {
    taskItem.classList.add("text-secondary", "text-decoration-line-through");
    completedTasks.appendChild(taskItem);
  } else {
    taskItem.classList.remove("text-secondary", "text-decoration-line-through");
    taskList.appendChild(taskItem);
  }
}
