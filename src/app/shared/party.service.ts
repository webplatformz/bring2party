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

  addParty(name: string): Observable<Party> {
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post('/api/_parties', JSON.stringify({name}), {headers})
      .map(this.extractData)
      .catch(this.handleError);
  }
}
