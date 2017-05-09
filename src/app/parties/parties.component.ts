import { Component, OnInit } from '@angular/core';
import { PartyService } from "../shared/party.service";

import { Party } from '../shared/party';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  title = 'Parties';
  parties: Party[];

  constructor(private partyService: PartyService) { }

  ngOnInit() {
    this.partyService.loadParties().subscribe(parties => this.parties = parties);
  }

  addParty(name: string) {
    this.partyService.addParty(name).subscribe(party =>{
      console.log(JSON.stringify(party));
      debugger;
      this.parties.push(party);
    })
  }

}
