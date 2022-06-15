import {
  handleAddTodo,
  handleCheckButton,
  handleRemoveButton,
  handleTodoDoubleClick,
  handleChangeTodo,
  handleFilterList,
} from "./controller/controller.js";
import { renderTodoList, renderCountTodoList } from "./view.js";
import { data, initData } from "./model.js";
import { countTodoList } from "./controller/countTodoList.js";

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
