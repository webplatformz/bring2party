import { Component, OnInit }  from '@angular/core';
import { Location }           from '@angular/common';
import { Router }             from "@angular/router";

import { Party }              from '../shared/party';
import { PartyService }       from "../shared/party.service";

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  title = 'Parties';
  parties: Party[];

  constructor(private partyService: PartyService,
              private location: Location,
              private router : Router) { }

  ngOnInit() {
    this.parties = this.partyService.getPartiesFromStore();
  }

  addParty(name: string) {
    let newParty = this.partyService.createPartyToStore(name);
    this.parties.unshift(newParty);
    this.router.navigateByUrl(`/party/${newParty.uuid}`);
  }

  sync() : void {
    console.log('Sync start');
    let operations = this.partyService.getOperationsFromStore();
    operations.forEach(queuedItem => {
      //remove item if success or handle properly
      if (queuedItem.operation === 'post') {
        console.log('processing post Item from queue');
        this.partyService.addParty(<Party>JSON.parse(queuedItem.item)).subscribe();
      }
    });

    //Delete operations and hope all went well
    this.partyService.deleteAllOperations();

    //everything from local to server done... read all from server now
    this.partyService.loadParties().subscribe(parties => {
      this.partyService.savePartiesToStore(parties);
      return this.parties = parties.reverse();
    });
  }

  goBack(): void {
    this.location.back();
  }

}
