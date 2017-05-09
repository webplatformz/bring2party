import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Party } from './party';

@Injectable()
export class PartyService {

  constructor(private http: Http) {
  }

  loadParties(): Promise<Party[]>{
    return this.http.get('/api/_parties').toPromise()
      .then(response => response.json() as Party[])
      .catch(this.handleError);
  }

  loadPartyById(id:string): Promise<Party> {
    return this.loadParties().then(parties => parties.find(party=>party.id == id));
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
