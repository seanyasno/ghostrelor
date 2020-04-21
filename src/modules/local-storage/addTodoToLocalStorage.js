export default function addTodoToLocalStorage(todoItem) {
  if (!localStorage.todos)
    localStorage.setItem('todos', JSON.stringify([]));
  let todos = JSON.parse(localStorage.todos);
  if (todos.filter(todo => todo.id === todoItem.id).length === 0) {
    todos.push(todoItem);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}