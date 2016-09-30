export class Todo {
  constructor(description, index) {
    this.description = description;
    this.uid = Date.now();
    this.done = false;
    this.index = index;
    this.order = index + 1;
  }
}