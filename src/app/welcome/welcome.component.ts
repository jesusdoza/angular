import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  name = '';
  welcomeMessage = `Welcome`;
  ngOnInit() {
    // get the route parameter with name key
    this.name = this.route.snapshot.params['name'];
  }
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  getWelcomeMessage() {
    console.log('button clicked');
    this.service.executeBeanService();
  }
}
