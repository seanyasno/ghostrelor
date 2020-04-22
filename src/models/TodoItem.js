export default class TodoItem {
  constructor(description = '', done = false, id = '') {
    this.description = description;
    this.done = done;
    this.id = id ? id : new Date().getTime();
  }
}