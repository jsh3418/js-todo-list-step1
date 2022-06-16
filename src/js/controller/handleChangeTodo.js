import { data, setLocalStorage } from "../model.js";
import { countTodoList } from "./countTodoList.js";
import { renderTodoList, renderCountTodoList } from "../view.js";

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
