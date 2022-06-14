export const saveTodo = (newTodoId, newTodo) => {
  const newData = {
    id: newTodoId,
    text: newTodo,
    checked: false,
  };

  return newData;
};
