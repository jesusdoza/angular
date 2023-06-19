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
  //
  id: number = 0;
  todo: Todo = new Todo(0, '', false, new Date());

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ///get an todo by ID number
  getTodo(id: number) {
    this.todoService.retrieveTodo('bob', id).subscribe({
      next: (res) => {
        console.log(res);

        this.todo = res;
      },
    });
  }

  ///save todo
  saveTodo() {}

  ///execute on component initialization
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getTodo(this.id);
    console.log(`id is ${this.id}`);
  }
}
