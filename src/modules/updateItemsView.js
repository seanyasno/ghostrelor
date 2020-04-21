export default function updateItemsView(todoDatabase) {
  todoDatabase.todos.map(todo => document.getElementById(`todo-item-check-${todo.id}`).checked = todo.done);
}