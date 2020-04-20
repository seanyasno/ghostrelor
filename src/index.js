import {TodoItem, TodoDatabase, updateTodosView} from "./models/index.js";
import {todoItemView} from "./views/index.js";

let todoDatabase = new TodoDatabase(updateTodosView);

let item0 = new TodoItem('Buy milk');
let item1 = new TodoItem('Trade elephants', true);
let item2 = new TodoItem('Buy a Tiger from Joe');

todoDatabase.addTodo(item0, todoItemView(item0, 0));
todoDatabase.addTodo(item0, todoItemView(item1, 1));
todoDatabase.addTodo(item0, todoItemView(item2, 2));

document.getElementById('add-todo-button').addEventListener('click', () => {
  let description = document.getElementById('todo-input').value;
  if (description) {
    console.log(todoItemView(new TodoItem(description), todoDatabase.todos.length));
    let todoItem = new TodoItem(description);
    todoDatabase.addTodo(todoItem, todoItemView(todoItem, todoDatabase.todos.length));
  }
});