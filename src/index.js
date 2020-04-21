import {TodoDatabase} from './models/index.js';
import {initTodoView, updateTodosView} from './modules/todo-state/index.js';
import {loadTodosFromLocalStorage} from './modules/local-storage/index.js';
import {addTodo} from './modules/index.js';

const ENTER_KEY_CODE = 13;
const todoDatabase = new TodoDatabase(updateTodosView);

window.onload = () => {
  loadTodosFromLocalStorage(todoDatabase, initTodoView);
  document.getElementById('add-todo-button').addEventListener('click', () => addTodo(todoDatabase, initTodoView, true));
  document.getElementById('todo-input').addEventListener('keyup', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      addTodo(todoDatabase, initTodoView, true);
    }
  });
}
