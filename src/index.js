import {TodoDatabase} from './models/index.js';
import {loadTodosFromLocalStorage} from './modules/local-storage/index.js';
import {addTodoItem, removeAllCheckedItems, removeAllItems} from './modules/index.js';
import {initTodoEvents} from './modules/todo-events/index.js';

const ENTER_KEY_CODE = 13;
const todoDatabase = new TodoDatabase();

window.onload = () => {
  loadTodosFromLocalStorage(todoDatabase, initTodoEvents);
  document.getElementById('add-todo-button').addEventListener('click', () => addTodoItem(todoDatabase, initTodoEvents, true));
  document.getElementById('todo-input').addEventListener('keyup', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      addTodoItem(todoDatabase, initTodoEvents, true);
    }
  });
  document.getElementById('remove-done-items').addEventListener('click', () => removeAllCheckedItems(todoDatabase));
  document.getElementById('remove-all-items').addEventListener('click', () => removeAllItems(todoDatabase));
}
