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

  addTodo(todoItem, todoItemView) {
    this.todos.push(todoItem);
    if (this.addTodoEvent)
      this.addTodoEvent(todoItemView);
  }

  removeTodo(todoId, todoItemView) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
    if (this.removeTodoEvent)
      this.removeTodoEvent(todoItemView);
  }

  checkTodo(todoIndex, todoItemView) {
    this.todos = this.todos.map((todo, index) => index === todoIndex ? todo.done = !todo.done : '');
    if (this.checkTodoEvent)
      this.checkTodoEvent(todoItemView);
  }
}