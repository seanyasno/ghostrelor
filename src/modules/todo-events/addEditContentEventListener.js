import {addEventListenerToItem} from './index.js';

export default function addEditContentEventListener(todoDatabase) {
  const elementId = 'description-item-';
  addEventListenerToItem((todoId, event) => {
    const todoIndex = todoDatabase.todos.findIndex(todo => todo.id === Number(todoId));
    if (todoIndex !== -1) {
      document.getElementById(elementId + todoId).textContent = todoDatabase.todos[todoIndex].description;
    }
  }, elementId, 'blur');
}