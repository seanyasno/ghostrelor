import todoAction from "./todoAction.js";

export default function checkTodo(todoDatabase) {
  todoAction((todoId) => {
    todoDatabase.todos.map(todo => todo.id === Number(todoId) ? todo.done = !todo.done : '');
  }, 'todo-item-check-');
}