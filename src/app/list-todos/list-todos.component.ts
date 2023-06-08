import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent {
  todos = [
    {
      id: 1,
      description: 'todo something',
    },
    {
      id: 2,
      description: 'something else',
    },
    {
      id: 3,
      description: 'fdasfasdf',
    },
  ];
}
