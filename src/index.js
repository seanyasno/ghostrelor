import {TodoDatabase, updateTodosView, addTodo, initTodoView} from './models/index.js';
import {loadTodosFromLocalStorage} from './modules/local-storage/index.js';

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
