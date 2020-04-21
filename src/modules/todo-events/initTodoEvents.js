import {addRemoveEventListener, addCheckEventListener} from './index.js';

export default function initTodoEvents(todoDatabase) {
  addRemoveEventListener(todoDatabase);
  addCheckEventListener(todoDatabase);
}