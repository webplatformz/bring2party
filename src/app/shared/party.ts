import { Item } from './item';
import { Location } from './location';
import { User } from './user';

export class Party {

  id: string;
  uuid: string;
  name: string;
  location: Location;
  date: Date;
  items: Item[];
  persons: User[];

  constructor(name: string) {
    this.name = name;
    this.uuid = this.randomString(8);
    this.location = new Location();
    this.date;
    this.items = [];
    this.persons = [];
  }

  private randomString(length) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
}
