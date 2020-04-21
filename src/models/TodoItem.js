export default class TodoItem {
  constructor(description = '', done = false, id='') {
    this.description = description;
    this.done = done;
    if (id)
      this.id = id;
    else
      this.id = new Date().getTime();
  }
}