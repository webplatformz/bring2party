import { Component, OnInit } from '@angular/core';
import {PartyService} from '../shared/party.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private partyService: PartyService,
    private router: Router) {

  }

  ngOnInit() {
  }

  sync() : void {
    console.log('Sync start');
    let operations = this.partyService.getOperationsFromStore();
    operations.forEach(queuedOperation => {
      //remove item if success or handle properly
      if (queuedOperation.method === 'post') {
        console.log('processing post Item from queue');
        this.partyService.createPartyToRemote(queuedOperation.party).subscribe();
      }
    });

    //Delete operations and hope all went well
    this.partyService.deleteAllOperations();

    //everything from local to server done... read all from server now
    this.partyService.loadPartiesFromRemote().subscribe(parties => {
      this.partyService.saveParties(parties);
      location.reload();
    });
  }

}
