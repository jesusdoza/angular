import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export class Todo {
  username: string = '';

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
  constructor(private todoService: TodoDataService, private router: Router) {}
  message = '';
  todos: Todo[] = [];
  todos$: Observable<Todo[]> | null = null;

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

  deleteTodo(id: number) {
    //todo remove hardcoded username
    console.log('deleting', id);
    try {
      this.todoService.deleteTodo('bob', id)?.subscribe({
        next: (response) => {
          console.log('delete todo response', response);
          this.message = `Delete Successful for id ${id}`;
          this.refreshTodos();
        },
      });
    } catch (error) {
      console.log('error in delete todo', (error as Error).message);
    }
  }

  updateTodo(id: number) {
    console.log(`update id ${id}`);
    this.router.navigate(['todos', id]);
  }

  refreshTodos() {
    //using async pipe in template and looping
    this.todos$ = this.todoService.retrieveAllTodos('bob');

    //using just the array that is set to display in template
    this.todoService.retrieveAllTodos('bob').subscribe({
      next: (response) => {
        // console.log('response', response);
        this.todos = response;
      },
    });
  }

  ngOnInit() {
    this.refreshTodos();
  }
}
