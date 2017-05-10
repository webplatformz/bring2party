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

  constructor(
    private partyService: PartyService,
    private location: Location,
    private router : Router) { }

  ngOnInit() {
    this.partyService.loadParties().subscribe(parties => this.parties = parties.reverse());
  }

  addParty(name: string) {
    this.partyService.addParty(name).subscribe(party =>{
      this.parties.unshift(party);
      this.router.navigateByUrl(`/party/${party.id}`);
    })
  }

  goBack(): void {
    this.location.back();
  }

}
