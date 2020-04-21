import {TodoDatabase, updateTodosView, addTodo, initTodoView} from "./models/index.js";

const ENTER_KEY_CODE = 13;
const todoDatabase = new TodoDatabase(updateTodosView);

window.onload = () => {
  document.getElementById('add-todo-button').addEventListener('click', () => addTodo(todoDatabase, initTodoView));
  document.getElementById('todo-input').addEventListener('keyup', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      addTodo(todoDatabase, initTodoView);
    }
  });
}
