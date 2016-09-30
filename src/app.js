import {Todo} from './todo';

export class App {
  constructor() {
    this.heading = "Todos";
    this.todos = [];
    this.todoDescription = '';
    this.counter = 0;
  }

  addTodo() {
    if (this.todoDescription) {
      var index = this.todos.length;
      this.todos.push(new Todo(this.todoDescription, index));
      this.todoDescription = '';
      this.counter++;
    }

    console.log(this.todos);
  }

  removeTodo(todo) {
    var index = todo.index;

    if (index >= 0) {
      // concatenate arrays without the element at the specified index.
      // The latter half of the array is mapped to reduce all index & order by 1
      var sliced =
        [...this.todos.slice(0, index),
        ...this.todos.slice(index+1).map(function(e,i,a) {
            e.index = (e.index - 1);
            e.order = e.index + 1;
            return e;
          })
        ];

      // then we set our updated list to the new array
      this.todos = sliced;
    }

    console.log(this.todos);
  }

  // This method assumes values within corect order boundaries.
  // we solve conflicts by naively increasing order by 1 until
  // we find an empty slot. Not the best way to do it but...
  reorderToDo() {
    var temp = new Array(this.todos.length);

    this.todos.map(function(e,i,a) {
      if (e.order > temp.length) {
        e.order = temp.length;
      }

      var newIndex = e.order - 1;
      var placed = false;

      while (!placed) {
        if (temp[newIndex] === undefined) {
          e.index = newIndex;
          e.order = newIndex + 1;
          temp[newIndex] = e;
          placed = true;
        } else {
          newIndex++;

          if (newIndex === temp.length) {
            newIndex = 0;
          }
        }
      }
    });

    this.todos = temp;
  }

  keyDownEvent(e) {
    console.log(e);
  }

  finishAllToDo() {
    for (let i = 0; i < this.todos.length; i++) {
      this.todos[i].done = true;
    }
  }

  uncheckAllToDo() {
    for (let i = 0; i < this.todos.length; i++) {
      this.todos[i].done = false;
    }
  }

  deleteAllToDo() {
    if (confirm("Are you sure you want to delete all your tasks?")) {
      this.todos = [];
    }
  }
}