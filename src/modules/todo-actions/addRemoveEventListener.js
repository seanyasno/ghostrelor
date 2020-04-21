import addEventListenerToItem from './addEventListenerToItem.js';
import {removeTodoFromLocalStorage} from '../local-storage/index.js';

export default function addRemoveEventListener(todoDatabase) {
  addEventListenerToItem((todoId) => {
    todoDatabase.removeTodo(Number(todoId));
    removeTodoFromLocalStorage(todoId);
    document.getElementById(`todo-item-${todoId}`).remove();
  }, 'remove-item-');
}