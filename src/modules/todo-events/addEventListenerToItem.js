export default function addEventListenerToItem(callback, elementId, eventType='click') {
  const todosElements = document.getElementById('todos').children;
  for (let i = 0; i < todosElements.length; i++) {
    const todoId = todosElements[i].id.split('-')[2];
    document.getElementById(`${elementId}${todoId}`).addEventListener(eventType, (event) => {
      callback(todoId, event);
    });
  }
}