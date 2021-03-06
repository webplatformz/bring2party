import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Party}                    from "../shared/party";
import {User}                     from "../shared/user";
import {Item}                     from "../shared/item";
import {PartyService}             from "../shared/party.service";

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  party: Party;

  constructor(private route: ActivatedRoute,
              private partyService: PartyService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.party = this.partyService.getPartyByUuid(params['uuid']);
    });
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
    let newUser = new User(nickname, email);
    this.party.persons.push(newUser);
  }

  removePerson(person: User) {
    this.party.persons = this.party.persons.filter(each => each !== person);
  }

  saveParty(): void {
    // TODO
  }

  cancelParty(): void {
    // TODO
  }

}
