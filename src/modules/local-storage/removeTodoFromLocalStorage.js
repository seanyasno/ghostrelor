export default function removeTodoFromLocalStorage(todoId) {
  if (!localStorage.todos)
    localStorage.setItem('todos', JSON.stringify([]));
  let todos = JSON.parse(localStorage.todos);
  todos = todos.filter(todo => todo.id !== Number(todoId));
  localStorage.setItem('todos', JSON.stringify(todos));
}