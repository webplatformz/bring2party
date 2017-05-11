import { Item }       from './item';
import { Location }   from './location';
import { User }       from './user';

export class Party {

  id: string;
  name: string;
  location: Location;
  date: Date;
  user: User;
  items: Item[];
  persons: User[];

  constructor(name: string, user: User) {
    this.name = name;
    this.location = new Location();
    this.date = new Date();
    this.user = user;
    this.items = [];
    this.persons = [];
  }

}
