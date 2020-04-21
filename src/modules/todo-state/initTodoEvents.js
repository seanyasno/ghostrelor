import {addRemoveEventListener, addCheckEventListener} from '../todo-events';

export default function initTodoEvents(todoDatabase) {
  addRemoveEventListener(todoDatabase);
  addCheckEventListener(todoDatabase);
}