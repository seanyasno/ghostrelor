import {
  addRemoveEventListener,
  addCheckEventListener,
  addEditContentEventListener,
  addMouseOverEventListener,
  addMouseLeaveEventListener,
  addDropEventListener,
  addDragOverEventListener,
  addDragStartEventListener
} from './index.js';

export default function initTodoEvents(todoDatabase) {
  addRemoveEventListener(todoDatabase);
  addCheckEventListener(todoDatabase);
  addEditContentEventListener(todoDatabase);
  addMouseOverEventListener();
  addMouseLeaveEventListener();
  addDropEventListener(todoDatabase);
  addDragOverEventListener();
  addDragStartEventListener();
}