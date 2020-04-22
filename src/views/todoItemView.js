export default function TodoItemView(todoItem) {
  return `<div id="todo-item-${todoItem.id}">
      <div>
        <input id="todo-item-check-${todoItem.id}" class="check-todo" type="checkbox" ${todoItem.done ? 'checked' : ''}/>
        <h3 id="description-item-${todoItem.id}" contenteditable="true" class="todo-text">${todoItem.description}</h3>
      </div>
      <button id="remove-item-${todoItem.id}" class="remove-todo"></button>
    </div>`
}