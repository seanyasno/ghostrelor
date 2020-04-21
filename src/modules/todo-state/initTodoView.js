import {addRemoveEventListener, addCheckEventListener} from '../todo-actions';

export default function initTodoView(todoDatabase) {
  addRemoveEventListener(todoDatabase);
  addCheckEventListener(todoDatabase)
}