import {addEventListenerToItem} from '../index.js';

export default function addDragOverEventListener() {
  addEventListenerToItem((todoId, event) => {
    event.preventDefault();
  }, 'todo-item-', 'dragover');
}