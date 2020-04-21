import todoAction from './todoAction.js';
import {removeTodoFromLocalStorage} from '../local-storage/index.js';

export default function removeTodo(todoDatabase) {
  todoAction((todoId) => {
    todoDatabase.removeTodo(Number(todoId));
    removeTodoFromLocalStorage(todoId);
    document.getElementById(`todo-item-${todoId}`).remove();
  }, 'remove-item-');
}