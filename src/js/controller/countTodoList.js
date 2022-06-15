import { data } from "../model.js";

export const countTodoList = () => {
  return data.todos.length;
};

export const countCheckedTodoList = () => {
  let count = 0;
  data.todos.filter((item) => {
    if (item.checked === true) {
      count += 1;
    }
  });
  return count;
};

export const countActiveTodoList = () => {
  let count = 0;
  data.todos.filter((item) => {
    if (item.checked === false) {
      count += 1;
    }
  });
  return count;
};
