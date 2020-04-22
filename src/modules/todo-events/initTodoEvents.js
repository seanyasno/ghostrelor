import {
  addRemoveEventListener,
  addCheckEventListener,
  addEditContentEventListener,
  addMouseOverEventListener,
  addMouseLeaveEventListener
} from './index.js';

export default function initTodoEvents(todoDatabase) {
  addRemoveEventListener(todoDatabase);
  addCheckEventListener(todoDatabase);
  addEditContentEventListener(todoDatabase);
  addMouseOverEventListener();
  addMouseLeaveEventListener();
}