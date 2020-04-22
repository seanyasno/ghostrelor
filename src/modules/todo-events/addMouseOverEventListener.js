import {addEventListenerToItem} from './index.js';

export default function addMouseOverEventListener() {
  addEventListenerToItem((todoId) => {
    document.getElementById(`edit-item-${todoId}`).hidden = false;
  }, 'todo-item-', 'mouseover');
}