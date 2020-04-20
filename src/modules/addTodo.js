import {TodoItem} from "../models";
import {todoItemView} from "../views";

export default function addTodo(todoDatabase, initTodoView) {
  const description = document.getElementById('todo-input').value;
  if (description) {
    const todoItem = new TodoItem(description);
    todoDatabase.addTodo(todoItem, todoItemView(todoItem));
    document.getElementById('todo-input').value = '';
    initTodoView(todoDatabase);
  }
}