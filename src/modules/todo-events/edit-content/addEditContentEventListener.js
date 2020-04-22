import {addEventListenerToItem} from '../index.js';

export default function addEditContentEventListener(todoDatabase) {
  const elementId = 'description-item-';
  addEventListenerToItem((todoId, event) => {
    const todoIndex = todoDatabase.todos.findIndex(todo => todo.id === Number(todoId));
    if (todoIndex !== -1) {
      document.getElementById(elementId + todoId).textContent = todoDatabase.todos[todoIndex].description;
    }

    document.getElementById(`description-item-${todoId}`).setAttribute('contenteditable', 'false');
  }, elementId, 'blur');
  addEventListenerToItem((todoId) => {
    document.getElementById(`description-item-${todoId}`).setAttribute('contenteditable', 'true');
    document.getElementById(elementId+todoId).focus();
  }, 'edit-item-');
}