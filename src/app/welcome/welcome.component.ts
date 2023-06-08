import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  name = '';
  ngOnInit() {
    // get the route parameter with name key
    this.name = this.route.snapshot.params['name'];
  }
  constructor(private route: ActivatedRoute) {}
}
