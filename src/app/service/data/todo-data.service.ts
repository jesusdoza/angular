import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retrieveAllTodos(username: string) {
    ///will http.get will return an observable of type helloworldbean
    const observable = this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
    return observable;
  }
  retrieveTodo(username: string, id: number) {
    ///will http.get will return an observable of type helloworldbean
    const observable = this.http.get<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
    return observable;
  }

  deleteTodo(username: string, id: number) {
    if (!username || !id) {
      throw Error('no username or id provided');
      return;
    }
    const observable = this.http.delete<Todo[]>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
    return observable;
  }
}
