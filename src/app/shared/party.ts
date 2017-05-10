import { Item } from './item';
import { Location } from './location';
import { User } from './user';

export class Party {

  id: string;
  name: string;
  location: Location;
  date: Date;
  items: Item[];
  persons: User[];

  constructor(name: string) {
    this.name = name;
    this.location = new Location();
    this.date;
    this.items = [];
    this.persons = [];
  }

}
