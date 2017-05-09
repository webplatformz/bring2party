import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogin: boolean = false;

  constructor(
    private router: Router
  ) {
    // TODO could be improved by using different <router-outlet>s
    router.events.subscribe((route: any) => this.isLogin = route.url === '' || route.url === '/login');
  }
}
