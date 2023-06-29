import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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
    const auth$ = this.http
      .get<AuthenticationBean>(`http://localhost:8080/basicauth`, {
        headers: headerData,
      })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        })
      );
    return auth$;
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
    return null;
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
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
