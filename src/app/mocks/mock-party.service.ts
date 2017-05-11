import { Injectable }                 from '@angular/core';
import { Observable }                 from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Party }                      from '../shared/party';
import { UserService }                from "../shared/user.service";
import { PARTIES }                    from "./mock-db";

@Injectable()
export class MockPartyService {

  parties: Party[];

  constructor(
    private userService: UserService) {
    this.parties = PARTIES as Party[];
  }

  loadParties(): Observable<Party[]> {
    return Observable.of(this.parties);
  }

  loadPartyById(id: string): Observable<Party> {
    return Observable.of(this.parties.find(party => party.id == id));
  }

  addParty(name: string): Observable<Party> {
    let party = new Party(name, this.userService.getUser());
    party.id = Math.random().toString(36).substr(2, 10);
    return Observable.of(party);
  }

}
