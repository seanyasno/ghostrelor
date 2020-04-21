import {removeTodo, checkTodo} from "../todo-actions";

export default function initTodoView(todoDatabase) {
  removeTodo(todoDatabase);
  checkTodo(todoDatabase)
}