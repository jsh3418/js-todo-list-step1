import { renderTodoList, renderCountTodoList } from "../view.js";
import { saveTodo } from "../service.js";
import { data, setLocalStorage } from "../model.js";
import {
  countTodoList,
  countCheckedTodoList,
  countActiveTodoList,
} from "./countTodoList.js";

export const handleAddTodo = (event) => {
  event.preventDefault();

  const newTodo = document.forms[0].newTodo.value;
  if (newTodo.trim() === "") return;

  document.querySelector("#new-todo-title").value = "";

  let newTodoId = Date.now();
  for (let i in data.todos) {
    while (newTodoId === data.todos[i].id) {
      newTodoId = Date.now();
    }
  }
  data.todos.push(saveTodo(newTodoId, newTodo));
  setLocalStorage("todosState", data);
  renderTodoList(data.todos);
  renderCountTodoList(countTodoList());
};

export const handleCheckButton = (event) => {
  const checkBox = event.target.closest("input[type=checkbox]");
  if (checkBox === null) return;
  for (const item of data.todos) {
    if (item.id === +checkBox.id) {
      item.checked = !item.checked;
    }
  }
  setLocalStorage("todosState", data);
  renderTodoList(data.todos);
  renderCountTodoList(countTodoList());
};

export const handleRemoveButton = (event) => {
  const removeButton = event.target.closest("button");
  if (removeButton === null) return;
  const todoId = event.target.closest("li").dataset.id;
  data.todos.splice(todoId, 1);

  setLocalStorage("todosState", data);
  renderTodoList(data.todos);
  renderCountTodoList(countTodoList());
};

export const handleTodoDoubleClick = (event) => {
  const li = event.target.closest("li");
  li.classList.add("editing");
};

export const handleChangeTodo = (event) => {
  if (event.key === "Escape") {
    renderTodoList(data.todos);
    renderCountTodoList(countTodoList());
    return;
  }

  const editTodo = event.target.closest("input[class=edit]").value;

  if (event.key === "Enter" && editTodo === "") {
    alert("수정할 내용을 입력해주세요.");
    return;
  }

  if (event.key === "Enter") {
    const editTodoId = event.target.closest("li").dataset.id;
    data.todos[editTodoId].text = editTodo;

    setLocalStorage("todosState", data);
    renderTodoList(data.todos);
    renderCountTodoList(countTodoList());
  }
};

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
