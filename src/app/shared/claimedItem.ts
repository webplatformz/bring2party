import { User } from "./user";

export class ClaimedItem {

  user: User;
  count: number;

  constructor(user: User) {
    this.user = user;
    this.count = 0;
  }

}
