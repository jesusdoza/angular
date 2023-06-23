import {
  CSP_NONCE,
  ChangeDetectionStrategy,
  Component,
  OnChanges,
} from '@angular/core';
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
  todo: Todo = new Todo(-1, '', false, new Date());

  constructor(
    ///data service for todo database
    private todoService: TodoDataService,
    ///router to be able to reroute
    private router: Router,
    ///activated route to see route parameters
    private route: ActivatedRoute
  ) {}

  ///get an todo by ID number
  getTodo(id: number) {
    this.todoService.retrieveTodo('bob', id).subscribe({
      next: (data) => {
        console.log('get todos', data);

        this.todo = data;
      },
    });
  }

  ///save todo
  /*
  return new updated object on success or nothing on failure
  */
  saveTodo() {
    //empty description should not be saved
    if (this.todo.description === '') {
      console.log('todo is empty');
      return;
    }

    //TODO why on id
    console.log('this.todo.id', this.todo.id);
    if (this.todo.id === -1) {
      console.log('this.todo', this.todo);
      this.todoService.createTodo('bob', this.todo).subscribe({
        next: (data) => {
          this.router.navigate(['todos']);
          return;
        },
        error: (error) => {
          console.log(`error saveTodo(),`, error);
        },
      });
    } else {
      //valid todo with description
      this.todoService.updateTodo('bob', this.id, this.todo).subscribe({
        next: (data) => {
          if (data.id !== this.id) {
            console.log('error updateTodo ', data);
            return;
          }
          this.router.navigate(['todos']);
          return;
        },
        error: (error) => {
          console.log(`error saveTodo(),`, error);
        },
      });
    }

    //todo create todo HERE
  }

  ///execute on component initialization
  ngOnInit() {
    //get ID from route parameters map
    // this.id = this.route.snapshot.params['id']; //! error is getting string but Typescript not getting mad
    this.id = Number(this.route.snapshot.params['id']);

    if (this.id !== -1) {
      //get todo by id
      this.getTodo(this.id);
      console.log(`id is ${this.id}`);
    }
  }

  changeFn(event: Event) {
    console.log(event);
  }
}
