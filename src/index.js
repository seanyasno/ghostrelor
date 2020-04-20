import {TodoDatabase, updateTodosView, addTodo} from "./models/index.js";

let todoDatabase = new TodoDatabase(updateTodosView);

window.onload = () => {
  document.getElementById('add-todo-button').addEventListener('click', () => addTodo(todoDatabase));
  document.getElementById('todo-input').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      addTodo(todoDatabase);
    }
  });
}
