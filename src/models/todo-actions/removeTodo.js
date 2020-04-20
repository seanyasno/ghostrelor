import todoAction from "./todoAction.js";

export default function removeTodo(todoDatabase) {
  todoAction((todoId) => {
    todoDatabase.removeTodo(Number(todoId));
    document.getElementById(`todo-item-${todoId}`).remove();
  }, 'remove-item-');
}