import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAthenticationService {
  constructor() {}
  authenticate(username: string, password: string) {
    // console.log('user logged in before ? ', this.isUserLoggedIn());
    if (username === 'bob' && password === 'bob') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
