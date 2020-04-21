import {TodoItem} from '../models';
import {todoItemView} from '../views';
import {addTodoToLocalStorage} from './local-storage/index.js';

// addTodoItem
export default function addTodo(todoDatabase, initTodoView, addLocal = false, description = '', done = false, id = '') {
  if (!description) {
    description = document.getElementById('todo-input').value;
  }

  if (description) {
    let todoItem;
    if (id)
      todoItem = new TodoItem(description, done, id);
    else
      todoItem = new TodoItem(description);

    todoDatabase.addTodo(todoItem, todoItemView(todoItem));
    document.getElementById('todo-input').value = '';
    initTodoView(todoDatabase);
    if (addLocal)
      addTodoToLocalStorage(todoItem);
  }
}