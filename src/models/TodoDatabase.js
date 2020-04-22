export default class TodoDatabase {
  todos = [];

  add(todoItem) {
    this.todos.push(todoItem);
  }

  remove(todoId) {
    const index = this.todos.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  checkTodo(todoIndex) {
    this.todos[todoIndex].done = !this.todos[todoIndex].done;
  }

  sort() {
    this.todos.sort((x, y) => x.done === y.done ? 0 : x.done ? -1 : 1);
    this.todos.reverse();
  }
}