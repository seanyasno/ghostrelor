import {sortItemsView} from '../index.js';
import addEventListenerToItem from './addEventListenerToItem.js';
import {removeTodoFromLocalStorage} from '../local-storage/index.js';

export default function addRemoveEventListener(todoDatabase) {
  addEventListenerToItem((todoId) => {
    todoDatabase.remove(Number(todoId));
    removeTodoFromLocalStorage(todoId);
    document.getElementById(`todo-item-${todoId}`).remove();

    sortItemsView(todoDatabase);
  }, 'remove-item-');
}