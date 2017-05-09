import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  user: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  gotoParties(): void {
    let link = ['/parties'];
    this.router.navigate(link);
  }

}
