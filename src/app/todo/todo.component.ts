import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  id: number = 0;
  todo: Todo = new Todo(0, '', false, new Date());

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  getTodo(id: number) {
    this.todoService.retrieveTodo('bob', id).subscribe({
      next: (res) => {
        console.log(res);

        this.todo = res;
      },
    });
  }
  saveTodo() {}

  ngOnInit() {
    this.getTodo(1);
    this.id = this.route.snapshot.params['id'];
    console.log(`id is ${this.id}`);
  }
}
