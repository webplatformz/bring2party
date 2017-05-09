import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Party }                      from "../shared/party";
import { Item }                      from "../shared/item";
import { PartyService } from "../shared/party.service";

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  party: Party;
  itemName: string;
  itemCount: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private partyService: PartyService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.partyService.loadPartyById(params['id']))
      .subscribe(party => this.party = party as Party);
    this.afterAddNewItem();
  }

  goBack(): void {
    this.location.back();
  }

  addNewItem(): void {
    let newItem = new Item();
    newItem.name = this.itemName;
    newItem.count = this.itemCount;
    this.party.items.push(newItem);
    this.itemName = '';
    this.itemCount = 1;
  }

  afterAddNewItem(): void {
    this.itemName = '';
    this.itemCount = 1;
  }

  saveParty(): void {

  }

  cancelParty(): void {

  }

}
