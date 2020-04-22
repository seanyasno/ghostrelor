export default function removeAllCheckedItems(todoDatabase) {
  const todoElements = document.getElementById('todos').children;
  const removeIndices = [];
  for (let i = 0; i < todoElements.length; i++) {
    const todoItem = todoDatabase.todos.filter(todo => todo.id === Number(todoElements[i].id.split('-')[2]))[0];
    if (todoItem.done) {
      removeIndices.push(i);
      todoDatabase.remove(todoItem.id);
    }
  }

  localStorage.setItem('todos', JSON.stringify(todoDatabase.todos));

  removeIndices.reverse();
  for (let i = 0; i < removeIndices.length; i++) {
    todoElements[removeIndices[i]].remove();
  }
}