import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent {
  todos = [
    new Todo(12, 'this is desc', false, new Date()),
    new Todo(14, 'this is desc14', false, new Date()),
    new Todo(16, 'this fdsafasc', false, new Date()),
  ];
}
