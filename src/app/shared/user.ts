export class User {

  id: number;
  nickname: string;
  email: string;

  constructor(nickname: string, email: string) {
    this.nickname = nickname;
    this.email = email;
  }

}
