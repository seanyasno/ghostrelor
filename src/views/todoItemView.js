export default function TodoItemView(todoItem, index='') {
  return `<div id="todo-item-${index}">
    <input id="todo-item-check-${index}" type="checkbox" ${todoItem.done ? 'checked' : ''}/>
    <h3>${todoItem.description}</h3>
    </div>`
}