export default class TodoDatabase {
  todos = [];

  add(todoItem) {
    this.todos.push(todoItem);
  }

  remove(todoId) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

  checkTodo(todoIndex) {
    this.todos[todoIndex].done = !this.todos[todoIndex].done;
  }

  sort() {
    this.todos.sort((x, y) => x.done === y.done ? 0 : x.done ? -1 : 1);
    this.todos.reverse();
  }
}