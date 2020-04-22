import {addEventListenerToItem} from '../index.js';

export default function addMouseLeaveEventListener() {
  addEventListenerToItem((todoId) => {
    document.getElementById(`edit-item-${todoId}`).hidden = true;
  }, 'todo-item-', 'mouseleave')
}