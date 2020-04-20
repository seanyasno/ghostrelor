import {TodoItem} from "./index.js";
import {todoItemView} from "../views/index.js";

export default function addTodo(todoDatabase, initTodoView) {
  let description = document.getElementById('todo-input').value;
  if (description) {
    let todoItem = new TodoItem(description);
    todoDatabase.addTodo(todoItem, todoItemView(todoItem));
    document.getElementById('todo-input').value = '';
    initTodoView(todoDatabase);
  }
}