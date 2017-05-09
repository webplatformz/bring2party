import { Component, OnInit } from '@angular/core';
import {PartyService} from "../party.service";

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  parties: any[];

  constructor(private partyService: PartyService) { }

  ngOnInit() {
      this.partyService.loadParties().subscribe(parties => this.parties = parties);
  }

}
