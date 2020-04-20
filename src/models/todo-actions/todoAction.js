export default function todoAction(effect, elementId) {
  let todosElements = document.getElementById('todos').children;
  for (let i = 0; i < todosElements.length; i++) {
    let todoId = todosElements[i].id.split('-')[2];
    document.getElementById(`${elementId}${todoId}`).addEventListener('click', () => {
      effect(todoId);
    });
  }
}