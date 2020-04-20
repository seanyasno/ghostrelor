export default class TodoDatabase {
  todos = [];

  constructor(addTodoEvent = () => {
  }, removeTodoEvent = () => {
  }, checkTodoEvent = () => {
  }) {
    this.addTodoEvent = addTodoEvent;
    this.removeTodoEvent = removeTodoEvent;
    this.checkTodoEvent = checkTodoEvent;
  }

  addTodo(todoItem, ...args) {
    this.todos.push(todoItem);
    if (this.addTodoEvent)
      this.addTodoEvent(...args);
  }

  removeTodo(todoIndex, ...args) {
    this.todos = this.todos.filter((todo, index) => index === todoIndex);
    if (this.removeTodoEvent)
      this.removeTodoEvent(...args);
  }

  checkTodo(todoIndex, ...args) {
    this.todos = this.todos.map((todo, index) => index === todoIndex ? todo.done = !todo.done : '');
    if (this.checkTodoEvent)
      this.checkTodoEvent(...args);
  }
}