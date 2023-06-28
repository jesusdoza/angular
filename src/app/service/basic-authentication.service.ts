import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasicAthenticationService {
  constructor(private http: HttpClient) {}

  executeAuthenticationService(username: string, password: string) {
    ///Create headers for request
    const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader(
      username,
      password
    );

    //headers object to be set in the request
    const headerData = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    ///will http.get will return an observable of type helloworldbean
    const auth$ = this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers: headerData }
    );
    return auth$;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  createBasicAuthenticationHttpHeader(user: string, pass: string) {
    const username = user;
    const password = pass;
    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
