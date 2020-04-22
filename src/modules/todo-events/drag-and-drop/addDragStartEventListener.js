import {addEventListenerToItem} from '../index.js';

export default function addDragStartEventListener() {
  addEventListenerToItem((todoId, event) => {
    event.dataTransfer.setData("text", event.target.id);
  }, 'todo-item-', 'dragstart');
}