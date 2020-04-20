export default class TodoItem {
  constructor(description = '', done = false) {
    this.description = description;
    this.done = done;
    this.id = new Date().getTime();
  }
}