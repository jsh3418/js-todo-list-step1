export const data = {
  todos: [],
};

export const getLocalStorage = () => {
  if (localStorage.getItem("data") !== null) {
    data.todos = JSON.parse(localStorage.getItem("data")).todos;
  }
};

export const setLocalStorage = () => {
  localStorage.setItem("data", JSON.stringify(data));
};
