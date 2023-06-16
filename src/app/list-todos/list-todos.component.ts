import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Observable } from 'rxjs';

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
  constructor(private todoService: TodoDataService) {}

  todos: Todo[] = [];
  todos$: Observable<Todo[]> | null = null;
  // todo = [
  //   new Todo(12, 'this is desc', false, new Date()),
  //   new Todo(14, 'this is desc14', false, new Date()),
  //   new Todo(16, 'this fdsafasc', false, new Date()),
  // ];

  ngOnInit() {
    //using async pipe in template and looping
    this.todos$ = this.todoService.retrieveAllTodos('bob');

    //using just the array that is set to display in template
    this.todoService.retrieveAllTodos('bob').subscribe({
      next: (response) => {
        console.log('response', response);
        this.todos = response;
      },
    });
  }
}
