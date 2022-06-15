export const renderTodoList = (item) => {
  const template = item
    .map((item, index) => {
      return `
      <li data-id="${index}" class="${item.checked ? "completed" : "false"}">
        <div class="view">
          <input class="toggle" type="checkbox" id="${item.id}" ${
        item.checked ? "checked" : ""
      }/>
          <label class="label">${item.text}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="${item.text}" />
      </li>`;
    })
    .join("");
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = template;
};

export const renderCountTodoList = (number) => {
  const todoCount = document.querySelector(".todo-count strong");
  todoCount.textContent = number;
};
