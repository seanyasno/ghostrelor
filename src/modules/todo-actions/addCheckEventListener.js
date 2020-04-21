import addEventListenerToItem from './addEventListenerToItem.js';
import {checkTodoToLocalStorage} from '../local-storage/index.js';

export default function addCheckEventListener(todoDatabase) {
  addEventListenerToItem((todoId) => {
    for (let i = 0; i < todoDatabase.todos.length; i++) {
      if (todoDatabase.todos[i].id === Number(todoId)) {
        todoDatabase.todos[i].done = !todoDatabase.todos[i].done;
        checkTodoToLocalStorage(todoId, todoDatabase.todos[i].done);
      }
    }
  }, 'todo-item-check-');
}