import { data, setLocalStorage } from "../model.js";
import { countTodoList } from "./countTodoList.js";
import { renderTodoList, renderCountTodoList } from "../view.js";

export const handleRemoveButton = (event) => {
  const removeButton = event.target.closest("button");
  if (removeButton === null) return;
  const todoId = event.target.closest("li").dataset.id;
  data.todos.splice(todoId, 1);

  setLocalStorage("todosState", data);
  renderTodoList(data.todos);
  renderCountTodoList(countTodoList());
};
