import {updateItemsView} from './index.js';
import {initTodoEvents} from './todo-events/index.js';

export default function sortItemsView(todoDatabase) {
  todoDatabase.sort();
  updateItemsView(todoDatabase);
  initTodoEvents(todoDatabase);
}