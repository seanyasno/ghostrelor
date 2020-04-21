export default function removeAllItems(todoDatabase) {
  const todosElements = document.getElementById('todos').children;
  for (let i = 0; i < todoDatabase.todos.length; i++) {
    todosElements[0].remove();
  }

  todoDatabase.todos = [];
  localStorage.setItem('todos', JSON.stringify([]));
}