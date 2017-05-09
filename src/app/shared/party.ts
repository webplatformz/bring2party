import { Item } from './item';
import { Location } from './location';
import { User } from './user';

export class Party {
  id: string;
  name: string;
  location: Location;
  items: Item[];
  persons: User[];
}
