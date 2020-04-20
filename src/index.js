import {TodoDatabase, updateTodosView, addTodo, initTodoView} from "./models/index.js";

let todoDatabase = new TodoDatabase(updateTodosView);

window.onload = () => {
  document.getElementById('add-todo-button').addEventListener('click', () => addTodo(todoDatabase, initTodoView));
  document.getElementById('todo-input').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      addTodo(todoDatabase, initTodoView);
    }
  });
}
