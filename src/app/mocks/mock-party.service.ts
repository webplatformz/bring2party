import { Injectable }                 from '@angular/core';
import { Observable }                 from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Party }                      from '../shared/party';
import { UserService }                from "../shared/user.service";
import { PARTIES }                    from "./mock-db";
import {User} from "app/shared/user";

@Injectable()
export class MockPartyService {

  parties: Party[];

  constructor(
    private userService: UserService) {
    this.parties = PARTIES as Party[];
  }

  getParties(): Observable<Party[]> {
    return Observable.of(this.parties);
  }

  getPartyByUuid(uuid: string): Observable<Party> {
    return Observable.of(this.parties.find(party => party.uuid == uuid));
  }

  createParty(name: string, user: User): Observable<Party> {
    let party = new Party(name, user);
    party.id = Math.random().toString(36).substr(2, 10);
    return Observable.of(party);
  }

  //### FAKE remote communication is done here ###

  loadPartiesFromRemote(): Observable<Party[]> {
    return this.getParties();
  }

  loadPartyFromRemoteById(id: string): Observable<Party> {
    return this.getPartyByUuid(id);
  }

  // TODO fix argument
  createPartyToRemote(party: Party): Observable<Party> {
    return this.createParty(party.name, null);
  }

}
