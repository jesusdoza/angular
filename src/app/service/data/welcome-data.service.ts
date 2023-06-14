import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}
@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeBeanService() {
    //console.log('bean service called');

    const result = this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean'
    );
    return result;
  }
}
