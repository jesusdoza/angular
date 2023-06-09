import { Component } from '@angular/core';
import { HardcodedAthenticationService } from '../service/hardcoded-athentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  // isUserLoggedIn: boolean = false;
  constructor(
    public hardcodedAthenticationService: HardcodedAthenticationService
  ) {}

  ngOnInit() {
    //check authenticated
    // this.isUserLoggedIn = this.hardcodedAthenticationService.isUserLoggedIn();
  }
}
