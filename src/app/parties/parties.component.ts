import { Component, OnInit } from '@angular/core';
import { PartyService } from "../party.service";

import { Party } from '../party';

export const PARTIES: Party[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

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
    //this.partyService.loadParties().subscribe(parties => this.parties = parties);
    this.parties = PARTIES;
  }

}
