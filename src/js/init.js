import { renderTodoList, renderCountTodoList } from "./view.js";
import { data, initData } from "./model.js";

import { countTodoList } from "./controller/countTodoList.js";
import { handleAddTodo } from "./controller/handleAddTodo.js";
import { handleChangeTodo } from "./controller/handleChangeTodo.js";
import { handleCheckButton } from "./controller/handleCheckButton.js";
import { handleFilterList } from "./controller/handleFilterList.js";
import { handleRemoveButton } from "./controller/handleRemoveButton.js";
import { handleTodoDoubleClick } from "./controller/handleTodoDoubleClick.js";

const initEventListener = () => {
  const inputform = document.querySelector("form");
  const todoList = document.querySelector("#todo-list");
  const filters = document.querySelector(".filters");

  inputform.addEventListener("submit", (event) => handleAddTodo(event));
  todoList.addEventListener("click", (event) => handleCheckButton(event));
  todoList.addEventListener("click", (event) => handleRemoveButton(event));
  todoList.addEventListener("dblclick", (event) =>
    handleTodoDoubleClick(event)
  );
  todoList.addEventListener("keyup", (event) => handleChangeTodo(event));
  filters.addEventListener("click", (event) => handleFilterList(event));
};

export const initApp = () => {
  initEventListener();
  initData();
  renderTodoList(data.todos);
  renderCountTodoList(countTodoList());
};
