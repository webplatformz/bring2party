import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Party }                      from "../shared/party";
import { User }                      from "../shared/user";
import { Item }                      from "../shared/item";
import { PartyService } from "../shared/party.service";

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
      .subscribe(party => this.party = party as Party);
  }

  goBack(): void {
    this.location.back();
  }

  addNewItem(name: string, count: number): void {
    let newItem = new Item();
    newItem.name = name;
    newItem.count = count;
    this.party.items.push(newItem);
  }

  removeItem(item: Item) {
    this.party.items = this.party.items.filter(each => each !== item);
  }

  addNewPerson(nickname: string, email: string): void {
    let newUser = new User();
    newUser.nickname = nickname;
    newUser.email = email;
    this.party.persons.push(newUser);
  }

  removePerson(person: User) {
    this.party.persons = this.party.persons.filter(each => each !== person);
  }

  saveParty(): void {

  }

  cancelParty(): void {

  }

}
