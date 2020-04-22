export default function checkTodoToLocalStorage(todoId, done) {
  if (!localStorage.todos)
    localStorage.setItem('todos', JSON.stringify([]));
  const todos = JSON.parse(localStorage.todos);
  todos.map(todo => todo.id === Number(todoId) ? todo.done = done : '');
  localStorage.setItem('todos', JSON.stringify(todos));
}