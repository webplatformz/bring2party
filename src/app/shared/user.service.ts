import { Injectable }     from '@angular/core';

import { User }           from "./user";

@Injectable()
export class UserService {

  private user: User;

  constructor() { }

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  equals(user: User): boolean {
    return this.user === user || (!!this.user && !!user && this.user.email == user.email);
  }

  createNewEmptyUser(): User {
    return new User(null, null);
  }

}
