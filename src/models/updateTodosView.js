export default function updateTodosView(todoItemView) {
  if (todoItemView) {
    document.getElementById('todos').innerHTML += todoItemView;
  }
}