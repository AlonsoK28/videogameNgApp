import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppAnimations } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    AppAnimations
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'ng-app';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

