export default function addItemToListView(todoItemView) {
  if (todoItemView) {
    document.getElementById('todos').innerHTML += todoItemView;
  }
}