export const handleTodoDoubleClick = (event) => {
  const li = event.target.closest("li");
  li.classList.add("editing");
};
