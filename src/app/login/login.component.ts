import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  username = 'bob';
  password = '';

  constructor(private router: Router) {}

  handleLogin() {
    if (this.username === 'bob' && this.password === 'bob') {
      this.invalidLogin = false;
      //redirect to welcome page
      this.router.navigate(['welcome']);
    } else {
      this.invalidLogin = true;
    }

    //returning false to keep from refreshing on form
    return false;
  }
}
