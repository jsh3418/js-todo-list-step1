import { data, setLocalStorage } from "../model.js";
import { countTodoList } from "./countTodoList.js";
import { renderTodoList, renderCountTodoList } from "../view.js";

export const handleCheckButton = (event) => {
  const checkBox = event.target.closest(".toggle");
  if (checkBox === null) return;
  for (const item of data.todos) {
    if (item.id === Number(checkBox.id)) {
      item.checked = !item.checked;
    }
  }
  setLocalStorage("todosState", data);
  renderTodoList(data.todos);
  renderCountTodoList(countTodoList());
};
