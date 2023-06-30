import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  createTodo(username: string, todo: Todo) {
    const observable = this.http.post<Todo>(
      `${API_URL}/users/${username}/todos`,
      todo
    );
    return observable;
  }

  retrieveAllTodos(username: string) {
    ///will http.get will return an observable of type helloworldbean
    const observable = this.http.get<Todo[]>(
      `${API_URL}/users/${username}/todos`
    );
    return observable;
  }
  retrieveTodo(username: string, id: number) {
    ///will http.get will return an observable of type helloworldbean
    const observable = this.http.get<Todo>(
      `${API_URL}/users/${username}/todos/${id}`
    );
    return observable;
  }

  saveTodo(username: string, id: string, data: string) {
    const observable = this.http.post<Todo>(
      `${API_URL}/users/${username}/todos/${id}`,
      data
    );
    return observable;
  }

  deleteTodo(username: string, id: number) {
    if (!username || !id) {
      throw Error('no username or id provided');
      return;
    }
    const observable = this.http.delete<Todo[]>(
      `${API_URL}/users/${username}/todos/${id}`
    );
    return observable;
  }

  updateTodo(username: string, id: number, todo: Todo) {
    ///will http.get will return an observable of type helloworldbean
    const observable = this.http.put<Todo>(
      `${API_URL}/users/${username}/todos/${id}`,
      todo
    );
    return observable;
  }
}
