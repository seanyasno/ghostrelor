export default function TodoItemView(todoItem) {
  return `<div id="todo-item-${todoItem.id}">
      <input id="todo-item-check-${todoItem.id}" class="check-todo" type="checkbox" ${todoItem.done ? 'checked' : ''}/>
      <h3 class="todo-text">${todoItem.description}</h3>
      <button id="remove-item-${todoItem.id}" class="remove-todo"></button>
    </div>`
}