import {addEventListenerToItem} from './index.js';
import {checkTodoToLocalStorage} from '../local-storage/index.js';
import {sortItemsView} from '../index.js';

export default function addCheckEventListener(todoDatabase) {
  addEventListenerToItem((todoId) => {
    console.log(todoId);
    for (let i = 0; i < todoDatabase.todos.length; i++) {
      if (todoDatabase.todos[i].id === Number(todoId)) {
        todoDatabase.checkTodo(i);
        checkTodoToLocalStorage(todoId, todoDatabase.todos[i].done);
      }
    }

    sortItemsView(todoDatabase);
  }, 'todo-item-check-');
}