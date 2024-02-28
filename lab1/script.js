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
function createTask() {
  // Get input, Create task elements
  const taskInput = document.querySelector("#taskInput"); //Input Selector
  const groupInput = document.querySelector("#groupInput"); //Group Selector
  const taskList = document.querySelector("#taskList"); //Task Item Container

  // Creation of Each Task element
  let taskItem = document.createElement("ul");
  let checkbox = document.createElement("input");
  let task = document.createElement("label");
  let groupTask = document.createElement("p");
  let btnDiv = document.createElement("div");
  let deleteBtn = document.createElement("button");
  let taskBtn = document.createElement("button");
  let dateLabel = document.createElement("label");
  let date = document.createElement("input");
  let dateDiv = document.createElement("div");

  // Assigning proper type, Assign ID to Delete and Edit Button
  checkbox.type = "checkbox";
  date.type = "date";
  groupTask.innerText = groupInput.value;
  deleteBtn.innerText = "Delete";
  taskBtn.innerText = "Add SubTask";
  deleteBtn.id = "Delete";
  task.innerText = taskInput.value; // Passed Input value to be displayed
  dateLabel.innerText = "Due:";

  // BootStrap Styling Classes added
  taskItem.classList.add("row", "d-flex", "mb-3");
  groupTask.classList.add(
    "col-lg-3",
    "col-md-2",
    "col-sm-3",
    "col-5",
    "fs-4",
    "text-center",
  );
  checkbox.classList.add("col-1", "checkbox", "mt-2");
  task.classList.add(
    "col-lg-2",
    "col-md-2",
    "col-sm-3",
    "col-5",
    "fs-5",
    "text-center",
    "pt-1",
  );
  dateDiv.classList.add(
    "col-lg-3",
    "col-md-4",
    "col-sm-4",
    "col-8",
    "d-flex",
    "justify-content-evenly",
  );
  dateLabel.classList.add("fs-4");
  date.classList.add("text-center", "border-0", "rounded", "bg-light", "pb-2");
  btnDiv.classList.add(
    "col-lg-3",
    "col-md-3",
    "col-12",
    "pt-2",
    "d-flex",
    "justify-content-center",
  );
  deleteBtn.classList.add("btn", "btn-outline-danger");
  taskBtn.classList.add("btn", "btn-outline-secondary", "ms-1");

  // Add Delete Function to button
  deleteBtn.setAttribute("onclick", "deleteItem(this)");
  checkbox.setAttribute("onclick", "completeTask(this)");
  date.value = todayDate(); // Set Due Date to Current Date, calls todayDate()

  // Append deletebtn to its div container
  btnDiv.appendChild(deleteBtn);
  btnDiv.appendChild(taskBtn);

  // Append date label and date to its div container
  dateDiv.appendChild(dateLabel);
  dateDiv.appendChild(date);

  // Append each part of task to its li Container
  taskItem.appendChild(groupTask);
  taskItem.appendChild(checkbox);
  taskItem.appendChild(task);
  taskItem.appendChild(dateDiv);
  taskItem.appendChild(btnDiv);

  // Append The task li to the Ul container
  taskList.appendChild(taskItem);

  // Add modal function to taskBtn
  modalListener(taskBtn);
}
function addTask() {
  const taskInput = document.querySelector("#taskInput"); //Input Selector
  const groupInput = document.querySelector("#groupInput"); //Group Selector
  const emptyTask = document.querySelector("#emptyTask"); // Empty Error Message
  const longTask = document.querySelector("#longTask"); // Length of word is too long

  // Error Checking
  if (taskInput.value == "") {
    emptyTask.classList.remove("d-none");
  } else if (taskInput.value.length > 30 || groupInput.value.length > 15) {
    longTask.classList.remove("d-none");
  } else {
    emptyTask.classList.add("d-none");
    longTask.classList.add("d-none");
    createTask();
  }
}
function subTask() {
  const subtaskInput = document.querySelector("#subtaskInput");
  const emptysubTask = document.querySelector("#emptysubTask"); // Empty Error Message
  const longsubTask = document.querySelector("#longsubTask"); // Length of word is too long
  if (subtaskInput.value == "") {
    emptysubTask.classList.remove("d-none");
  } else if (subtaskInput.value.length > 15) {
    longsubTask.classList.remove("d-none");
  } else {
    emptysubTask.classList.add("d-none");
    longsubTask.classList.add("d-none");

    let subtaskItem = document.createElement("li");
    let checkbox = document.createElement("input");
    let subTask = document.createElement("label");
    let btnDiv = document.createElement("div");
    let deleteBtn = document.createElement("button");

    checkbox.type = "checkbox";
    deleteBtn.innerText = "Delete";
    subTask.innerText = subtaskInput.value; // Passed Input value to be displayed

    subtaskItem.classList.add(
      "row",
      "d-flex",
      "justify-content-center",
      "mb-3",
    );
    checkbox.classList.add("col-1", "checkbox", "mt-2", "ms-2");
    subTask.classList.add(
      "fs-5",
      "col-lg-2",
      "col-4",
      "text-center",
      "text-secondary",
      "pt-2",
    );
    btnDiv.classList.add("col-2", "pt-2");
    deleteBtn.classList.add("btn", "btn-outline-danger");

    deleteBtn.setAttribute("onclick", "deleteItem(this)");
    checkbox.setAttribute("onclick", "completesubTask(this)");
    btnDiv.appendChild(deleteBtn);

    subtaskItem.appendChild(checkbox);
    subtaskItem.appendChild(subTask);
    subtaskItem.appendChild(btnDiv);

    modalList.appendChild(subtaskItem);
    const modal = document.querySelector("#modal");
    modal.close();
  }
}
function deleteItem(element) {
  let btnContainer = element.parentNode;
  let item = btnContainer.parentNode;
  let itemContainer = item.parentNode;
  const completeContainer = document.querySelector("#completeContainer");
  const completedTasks = document.querySelector("#completedTasks");
  itemContainer.removeChild(item);
  if (completedTasks.children.length == 0) {
    completeContainer.classList.add("d-none");
  }
}

function completeTask(element) {
  let taskItem = element.parentNode;
  const completedTasks = document.querySelector("#completedTasks");
  const taskList = document.querySelector("#taskList"); //Task Item Container
  const completeContainer = document.querySelector("#completeContainer");

  if (taskItem.parentNode == taskList) {
    completeContainer.classList.remove("d-none");
    taskItem.classList.add("text-secondary", "text-decoration-line-through");
    completedTasks.appendChild(taskItem);
    const yay = document.querySelector("#completeSound");
    yay.volume = 1;
    yay.play();
  } else {
    taskItem.classList.remove("text-secondary", "text-decoration-line-through");
    taskList.appendChild(taskItem);
    if (completedTasks.children.length == 0) {
      completeContainer.classList.add("d-none");
    }
  }
}
function completesubTask(element) {
  let subtaskItem = element.parentNode;
  if (subtaskItem.classList.contains("text-decoration-line-through")) {
    subtaskItem.classList.remove("text-decoration-line-through");
  } else {
    subtaskItem.classList.add("text-decoration-line-through");
  }
}
let modalList;
function modalListener(element) {
  const modal = document.querySelector("#modal");
  const modalClose = document.querySelector("#modalClose");
  element.addEventListener("click", () => {
    modal.showModal();
    modalList = element.parentNode.parentNode;
  });
  modalClose.addEventListener("click", () => {
    modal.close();
    modalList = "";
  });
}
