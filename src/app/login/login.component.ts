import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { User }               from '../shared/user';
import { UserService }        from "../shared/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.createNewEmptyUser();
  }

  gotoParties(): void {
    // TODO: in a real application we would do some authentication and valdation
    this.userService.loginUser(this.user);
    let link = ['/parties'];
    this.router.navigate(link);
  }

}
