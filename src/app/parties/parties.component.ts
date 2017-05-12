import { Component, OnInit }  from '@angular/core';
import { Router }             from "@angular/router";

import { Party }              from '../shared/party';
import { PartyService }       from "../shared/party.service";
import { UserService }        from "../shared/user.service";

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
    private userService: UserService,
    private router : Router) { }

  ngOnInit() {
    this.parties = this.partyService.getParties();
  }

  private sortParties(parties: Party[]): Party[] {
    parties.sort((a,b) => { return (a.name || "").localeCompare(b.name || ""); });
    return parties;
  }

  addParty(name: string) {
    let newParty = this.partyService.createParty(name, this.userService.getUser());
    this.parties.unshift(newParty);
    this.router.navigateByUrl(`/party/${newParty.uuid}`);
  }

  isPartyOfCurrentUser(party: Party) {
    return this.userService.equals(party.user);
  }

  getNickname(party: Party): string {
    return (!party || !party.user || !party.user.nickname || !party.user.nickname.trim()) ? '<unknown>' : party.user.nickname;
  }

  getEmail(party: Party): string {
    return (!party || !party.user || !party.user.email || !party.user.email.trim()) ? '' : party.user.email;
  }

}
