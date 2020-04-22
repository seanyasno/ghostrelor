import {sortItemsView} from '../index.js';
import {addTodoItem} from '../item-actions/index.js';

export default function loadTodosFromLocalStorage(todoDatabase, initTodoView) {
  if (!localStorage.todos)
    localStorage.setItem('todos', JSON.stringify([]));

  const todos = JSON.parse(localStorage.todos);
  for (let i = 0; i < todos.length; i++) {
    addTodoItem(todoDatabase, initTodoView, false, todos[i].description, todos[i].done, todos[i].id);
  }

  sortItemsView(todoDatabase);
}