import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    ///will http.get will return an observable of type helloworldbean
    const result = this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean'
    );
    return result;
  }

  executePathVariableService(name: string) {
    //console.log('bean service called');

    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // //headers object to be set in the request
    // const headerData = new HttpHeaders({
    //   Authorization: basicAuthHeaderString,
    // });

    ///will http.get will return an observable of type helloworldbean
    const result = this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`
      //{ headers: headerData }
    );
    return result;
  }

  // createBasicAuthenticationHttpHeader(user = 'bob', pass = 'bob') {
  //   const username = user;
  //   const password = pass;
  //   const basicAuthHeaderString =
  //     'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
