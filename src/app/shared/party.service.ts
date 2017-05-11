import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Party} from './party';

@Injectable()
export class PartyService {

  constructor(private http: Http) {
  }

  getPartiesFromStore(): Party[]{
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

  createPartyToStore(name: string): Party {
    let newParty = new Party(name);
    let parties = this.getPartiesFromStore();
    parties.push(newParty);
    this.savePartiesToStore(parties);
    //todo save operation to stack
    let operationItem = {
      "operation": "post",
      "item": JSON.stringify(newParty)
    };
    this.insertOperation(JSON.stringify(operationItem));

    return newParty;
  }

  savePartiesToStore(parties:Party[]) {
    let partiesAsString = JSON.stringify(parties);
    console.log('saving partie to local: ' + parties.length);
    localStorage.setItem('bring2Party_parties', partiesAsString);
  }

  loadParties(): Observable<Party[]> {
    return this.http.get('/api/_parties')
      .map(this.extractData)
      .catch(this.handleError);
  }

  loadPartyById(id: string): Observable<Party> {
    return this.http.get(`/api/_parties/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  loadPartyByUuid(uuid: string): Party {
    let parties = this.getPartiesFromStore();
    console.log('searching in parties: ' + parties.length + 'for id ' + uuid);
    let selectedParty = parties.find(item => item.uuid === uuid);
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

  addParty(party: Party): Observable<Party> {
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post('/api/_parties', JSON.stringify(party), {headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private insertOperation(operationItem: string) {
    localStorage.setItem('bring2Party_operations', '[' + operationItem + ']');
  }

  getOperationsFromStore() {
    let storeContent = localStorage.getItem('bring2Party_operations');
    if (storeContent) {
      return JSON.parse(storeContent);
    }
    else {
      return [];
    }
  }

  deleteAllOperations() {
    localStorage.removeItem('bring2Party_operations');
  }
}
