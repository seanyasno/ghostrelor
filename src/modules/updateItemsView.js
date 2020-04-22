import {addItemToListView} from './item-actions/index.js';
import {todoItemView} from '../views/index.js';

export default function updateItemsView(todoDatabase) {
  todoDatabase.todos.map(todo => document.getElementById(`todo-item-check-${todo.id}`).checked = todo.done);
  const todosElements = document.getElementById('todos').children;
  for (let i = 0; i < todoDatabase.todos.length; i++) {
    todosElements[0].remove();
  }

  for (let i = 0; i < todoDatabase.todos.length; i++) {
    addItemToListView(todoItemView(todoDatabase.todos[i]));
  }
}