export default function todosView(todoItemView) {
  if (todoItemView) {
    document.getElementById('todos').innerHTML += todoItemView;
  }
}