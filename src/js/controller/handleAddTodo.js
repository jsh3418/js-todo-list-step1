import { data, setLocalStorage } from "../model.js";
import { saveTodo } from "../service.js";
import { countTodoList } from "./countTodoList.js";
import { renderTodoList, renderCountTodoList } from "../view.js";

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
