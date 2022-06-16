import { data } from "../model.js";
import {
  countTodoList,
  countCheckedTodoList,
  countActiveTodoList,
} from "./countTodoList.js";
import { renderTodoList, renderCountTodoList } from "../view.js";

export const handleFilterList = (event) => {
  renderTodoList(data.todos);

  const allTodoList = document.querySelector(".filters .all");
  const activeTodoList = document.querySelector(".filters .active");
  const compleatedTodoList = document.querySelector(".filters .completed");

  const todoList = document.querySelectorAll("#todo-list li");

  if (event.target.classList.contains("all")) {
    allTodoList.classList.add("selected");
    activeTodoList.classList.remove("selected");
    compleatedTodoList.classList.remove("selected");
    renderCountTodoList(countTodoList());
    return;
  }

  if (event.target.classList.contains("active")) {
    allTodoList.classList.remove("selected");
    activeTodoList.classList.add("selected");
    compleatedTodoList.classList.remove("selected");

    todoList.forEach((item) => {
      if (item.classList.contains("completed")) {
        item.remove();
        renderCountTodoList(countActiveTodoList());
      }
    });
    return;
  }

  if (event.target.classList.contains("completed")) {
    allTodoList.classList.remove("selected");
    activeTodoList.classList.remove("selected");
    compleatedTodoList.classList.add("selected");

    todoList.forEach((item) => {
      if (item.classList.contains("false")) {
        item.remove();
        renderCountTodoList(countCheckedTodoList());
      }
    });
  }
};
