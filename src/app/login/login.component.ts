import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAthenticationService } from '../service/hardcoded-athentication.service';

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

  constructor(
    private router: Router,
    private hardcodedAthenticationService: HardcodedAthenticationService
  ) {}

  handleLogin() {
    if (
      this.hardcodedAthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      this.invalidLogin = false;
      //redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }

    //returning false to keep from refreshing on form
    return false;
  }
}
