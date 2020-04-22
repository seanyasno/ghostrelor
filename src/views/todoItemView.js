export default function TodoItemView(todoItem) {
  return `<div id="todo-item-${todoItem.id}">
      <div>
        <input id="todo-item-check-${todoItem.id}" class="check-todo" type="checkbox" ${todoItem.done ? 'checked' : ''}/>
        <h3 id="description-item-${todoItem.id}" contenteditable="false" class="todo-text">${todoItem.description}</h3>
      </div>
      <div class="action-buttons">
        <button id="edit-item-${todoItem.id}" class="edit-todo" hidden></button>
        <button id="remove-item-${todoItem.id}" class="remove-todo"></button>
      </div>
    </div>`
}