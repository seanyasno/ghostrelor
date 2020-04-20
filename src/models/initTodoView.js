import {removeTodo, checkTodo} from "./todo-actions/index.js";

export default function initTodoView(todoDatabase) {
  removeTodo(todoDatabase);
  checkTodo(todoDatabase)
}