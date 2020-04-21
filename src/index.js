import {TodoDatabase} from './models/index.js';
import {initTodoEvents, addItemToListView} from './modules/todo-state/index.js';
import {loadTodosFromLocalStorage} from './modules/local-storage/index.js';
import {addTodo} from './modules/index.js';

const ENTER_KEY_CODE = 13;
const todoDatabase = new TodoDatabase(addItemToListView);

window.onload = () => {
  loadTodosFromLocalStorage(todoDatabase, initTodoEvents);
  document.getElementById('add-todo-button').addEventListener('click', () => addTodo(todoDatabase, initTodoEvents, true));
  document.getElementById('todo-input').addEventListener('keyup', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      addTodo(todoDatabase, initTodoEvents, true);
    }
  });
}
