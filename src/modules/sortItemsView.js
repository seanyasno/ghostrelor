import {initTodoEvents} from './todo-events/index.js';
import {updateItemsView} from './index.js';

export default function sortItemsView(todoDatabase) {
  todoDatabase.sort();
  updateItemsView(todoDatabase);
  initTodoEvents(todoDatabase);
}