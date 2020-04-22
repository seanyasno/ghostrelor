import {updateTodosInLocalStorage} from './local-storage/index.js';

export default function activateEditTodoItem(todoDatabase) {
  const elementId = 'description-item-';
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      for (let i = 0; i < todoDatabase.todos.length; i++) {
        if (document.getElementById(elementId + todoDatabase.todos[i].id) === document.activeElement) {
          todoDatabase.todos[i].description = document.getElementById(elementId + todoDatabase.todos[i].id).textContent;
          updateTodosInLocalStorage(todoDatabase.todos);
          document.getElementById(elementId + todoDatabase.todos[i].id).blur();
          break;
        }
      }
    }
  });
}