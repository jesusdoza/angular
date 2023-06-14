import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import {
  HelloWorldBean,
  WelcomeDataService,
} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  name = '';
  welcomeMessage = '';
  ngOnInit() {
    // get the route parameter with name key
    this.name = this.route.snapshot.params['name'];
  }
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  getWelcomeMessage() {
    const bean = this.service.executeBeanService().subscribe(
      (response) => this.handleSucessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
  }

  handleSucessfulResponse(object: Object) {
    let response = object as HelloWorldBean;

    this.welcomeMessage = `Welcome to the app ${response.message}`;
  }

  handleErrorResponse(error: any) {
    this.welcomeMessage = error.error.message;
    console.log(error);
  }
}
