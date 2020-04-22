export default function updateTodosInLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}