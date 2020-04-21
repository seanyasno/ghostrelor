import {TodoItem} from '../models';
import {todoItemView} from '../views';
import {addTodoToLocalStorage} from './local-storage/index.js';
import {addItemToListView, updateItemsView} from './index.js';

export default function addTodoItem(todoDatabase, initTodoEvents, addLocal = false, description = '', done = false, id = '') {
  if (!description) {
    description = document.getElementById('todo-input').value;
  }

  if (description) {
    let todoItem;
    if (id) {
      todoItem = new TodoItem(description, done, id);
    } else {
      todoItem = new TodoItem(description);
    }

    todoDatabase.add(todoItem);
    addItemToListView(todoItemView(todoItem));
    updateItemsView(todoDatabase);
    initTodoEvents(todoDatabase);
    document.getElementById('todo-input').value = '';
    if (addLocal) {
      addTodoToLocalStorage(todoItem);
    }
  }
}