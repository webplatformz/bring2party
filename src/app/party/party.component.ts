import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Party }                      from "../shared/party";
import {PartyService} from "../shared/party.service";

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  party: Party;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private partyService: PartyService
  ) { }

  ngOnInit() {

    this.route.params
      .switchMap((params: Params) => this.partyService.loadPartyById(params['id']))
      .subscribe(party => this.party = party);
  }

  goBack(): void {
    this.location.back();
  }

}
