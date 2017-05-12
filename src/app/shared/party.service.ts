import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Party} from './party';
import {Operation} from "./operation";
import {User} from "./user";

@Injectable()
export class PartyService {

  constructor(
    private http: Http) {
  }

  getUsers(): User[] {
    let users = [];
    // TODO: there is no explicit notion of a user object, so we just collect party owners (this will most likely contain duplicates)
    this.getParties().forEach(party => users.push(party.user));
    return users;
  }

  getParties(): Party[]{
    let storeContent = localStorage.getItem('bring2Party_parties');
    if (storeContent) {
      let jsonObj: any = JSON.parse(storeContent); // string to generic object first
      let parties: Party[] = <Party[]>jsonObj;
      return parties;
    } else {
      console.log('returning empty list');
      return [];
    }
  }

  createParty(name: string, user:User): Party {
    let newParty = new Party(name, user);
    let parties = this.getParties();
    parties.push(newParty);
    this.saveParties(parties);
    this.insertOperation(new Operation('post', newParty));
    return newParty;
  }

  saveParties(parties:Party[]) {
    let partiesAsString = JSON.stringify(parties);
    console.log('saving partie to local: ' + parties.length);
    localStorage.setItem('bring2Party_parties', partiesAsString);
  }

  getPartyByUuid(uuid: string): Party {
    let parties = this.getParties();
    console.log('searching in parties: ' + parties.length + ' for uuid ' + uuid);
    let selectedParty = parties.find(item => item.uuid == uuid); // ! identity/string
    return selectedParty;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private insertOperation(operation: Operation) {
    let ops = this.getOperationsFromStore();
    ops.push(operation);
    localStorage.setItem('bring2Party_operations', JSON.stringify(ops));
  }

  getOperationsFromStore(): Operation[] {
    let storeContent = localStorage.getItem('bring2Party_operations');
    if (storeContent) {
      let jsonObj: any = JSON.parse(storeContent); // string to generic object first
      let operations: Operation[] = <Operation[]>jsonObj;
      return operations;
    }
    else {
      return [];
    }
  }

  deleteAllOperations() {
    localStorage.removeItem('bring2Party_operations');
  }


  //### ALL remote communication is done here ###
  loadPartiesFromRemote(): Observable<Party[]> {
    return this.http.get('/api/_parties')
      .map(this.extractData)
      .catch(this.handleError);
  }

  loadPartyFromRemoteById(id: string): Observable<Party> {
    return this.http.get(`/api/_parties/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createPartyToRemote(party: Party): Observable<Party> {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/api/_parties', JSON.stringify(party), {headers})
      .map(this.extractData)
      .catch(this.handleError);
  }
}
