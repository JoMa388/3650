const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});
closeButton.addEventListener("click", () => {
  dialog.close();
});
function addList() {
  const list = document.querySelector("#listContainer");
  let taskInput = document.querySelector("#taskInput");
  let listItem = document.createElement("div");
  listItem.classList.add("justify-content-center", "row", "mb-3");
  list.appendChild(listItem);

  let task = document.createElement("p");
  task.textContent = taskInput.value;
  task.classList.add("fs-3", "text-info", "text-center", "mb-0", "col-3");
  let listCheckbox = document.createElement("input");
  listCheckbox.setAttribute("type", "checkbox");
  listCheckbox.classList.add("me-3", "col-1");
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger", "ms-4", "col-1");
  let btnImage = document.createElement("img");
  btnImage.setAttribute("src", "../img/trashIcon.png");
  btnImage.setAttribute("height", "25rem");
  deleteBtn.appendChild(btnImage);
  listItem.appendChild(listCheckbox);
  listItem.appendChild(task);
  listItem.appendChild(deleteBtn);
}
