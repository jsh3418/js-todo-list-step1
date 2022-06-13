export const saveTodo = (newTodo) => {
  const newData = {
    id: Date.now(),
    text: newTodo,
    checked: false,
  };

  return newData;
};
