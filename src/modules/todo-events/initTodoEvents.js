import {addRemoveEventListener, addCheckEventListener, addEditContentEventListener} from './index.js';

export default function initTodoEvents(todoDatabase) {
  addRemoveEventListener(todoDatabase);
  addCheckEventListener(todoDatabase);
  addEditContentEventListener(todoDatabase);
}