import { Injectable }     from '@angular/core';

import { User }           from "./user";
import { PartyService }        from "../shared/party.service";

@Injectable()
export class UserService {

  private user: User;

  constructor(
    private partyService: PartyService
  ) { }

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

  loginUser(user: User): void {
    let loadedUser = this.partyService.getUsers().find(each => each === user || each.email == user.email);
    this.setUser(!loadedUser ? user : loadedUser);
  }

}
