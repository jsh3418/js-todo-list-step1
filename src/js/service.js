import { data } from "./model.js";

export const saveTodo = (newTodo) => {
  const newData = {
    id: Date.now(),
    text: newTodo,
    checked: false,
  };

  data.todos.push(newData);
};
