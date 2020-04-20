import {TodoItem} from "./index.js";
import {todoItemView} from "../views/index.js";

export default function addTodo(todoDatabase) {
  let description = document.getElementById('todo-input').value;
  if (description) {
    let todoItem = new TodoItem(description);
    todoDatabase.addTodo(todoItem, todoItemView(todoItem));

    document.getElementById('todo-input').value = '';
    let todosElements = document.getElementById('todos').children;
    for (let i = 0; i < todosElements.length; i++) {
      let todoId = todosElements[i].id.split('-')[2];
      document.getElementById(`remove-item-${todoId}`).addEventListener('click', () => {
        todoDatabase.removeTodo(Number(todoId));
        document.getElementById(`todo-item-${todoId}`).remove();
      });
    }
  }
}