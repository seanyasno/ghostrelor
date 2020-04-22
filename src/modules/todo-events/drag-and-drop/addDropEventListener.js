import {addEventListenerToItem} from '../index.js';
import {sortItemsView} from '../../index.js';

export default function addDropEventListener(todoDatabase) {
  addEventListenerToItem((todoId, event) => {
    event.preventDefault();

    let originId = event.dataTransfer.getData("text");
    const targetId = Number(event.target.id.split('-')[2]);
    const targetIndex = todoDatabase.todos.findIndex(todo => todo.id === targetId);
    const currentIndex = todoDatabase.todos.findIndex(todo => todo.id === Number(originId.split('-')[2]));

    if (targetIndex === -1 || currentIndex === -1) {
      return;
    }

    let tempItem = todoDatabase.todos[targetIndex];
    todoDatabase.todos[targetIndex] = todoDatabase.todos[currentIndex];
    todoDatabase.todos[currentIndex] = tempItem;

    sortItemsView(todoDatabase, false);
  }, 'todo-item-', 'drop');
}