export const data = {
  todos: [],
};

export const initData = () => {
  if (localStorage.getItem("todosState") !== null) {
    data.todos = JSON.parse(localStorage.getItem("todosState")).todos;
  }
};

export const setLocalStorage = () => {
  localStorage.setItem("todosState", JSON.stringify(data));
};
