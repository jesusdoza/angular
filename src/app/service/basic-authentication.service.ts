import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root',
})
export class BasicAthenticationService {
  constructor(private http: HttpClient) {}

  // executeAuthenticationService(username: string, password: string) {
  //   ///Create headers for request
  //   const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader(
  //     username,
  //     password
  //   );
  executeJWTAuthenticationService(username: string, password: string) {
    ///Create headers for request

    ///will http.post will return an observable of type helloworldbean
    //after observable is subscribed successful post request will pipe data
    //map function will run operation on data aka body from response
    //save login token for user and username in session storage
    const auth$ = this.http
      .post<any>(`${API_URL}/authenticate`, { username, password })
      .pipe(
        map((data) => {
          //data is body of response
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        })
      );
    return auth$;
  }

  getAuthenticatedUser() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return user ? user : '';
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      const token = sessionStorage.getItem(TOKEN);
      return token ? token : '';
    }
    return '';
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  //encode a string with user credentials in Base64-encoded ASCII
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
