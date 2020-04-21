import todoAction from './todoAction.js';
import {checkTodoToLocalStorage} from '../local-storage/index.js';

export default function checkTodo(todoDatabase) {
  todoAction((todoId) => {
    for (let i = 0; i < todoDatabase.todos.length; i++) {
      if (todoDatabase.todos[i].id === Number(todoId)) {
        todoDatabase.todos[i].done = !todoDatabase.todos[i].done;
        checkTodoToLocalStorage(todoId, todoDatabase.todos[i].done);
      }
    }
  }, 'todo-item-check-');
}