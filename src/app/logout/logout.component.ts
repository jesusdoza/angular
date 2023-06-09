import { Component } from '@angular/core';
import { HardcodedAthenticationService } from '../service/hardcoded-athentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private authentication: HardcodedAthenticationService) {}

  ngOnInit() {
    this.authentication.logout();
  }
}
