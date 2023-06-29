import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAthenticationService } from '../service/hardcoded-athentication.service';
import { BasicAthenticationService } from '../service/basic-authentication.service';

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
    private hardcodedAthenticationService: HardcodedAthenticationService,
    private basicAuthService: BasicAthenticationService
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
      return false;
    }

    this.invalidLogin = true;
    //returning false to keep from refreshing on form
    return false;
  }

  handleBasicAuthLogin() {
    this.invalidLogin = false;
    this.basicAuthService
      .executeAuthenticationService(this.username, this.password)
      .subscribe({
        next: (data) => {
          console.log(`value `, data);
          this.router.navigate(['welcome', this.username]);
        },
        error: (err) => {
          this.invalidLogin = true;
          console.log('error with basic auth login', err);
        },
      });

    //returning false to keep from refreshing on form
    return false;
  }
}
