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
    this.partyService.loadParties().subscribe(parties => this.parties = this.sortParties(parties));
  }

  private sortParties(parties: Party[]): Party[] {
    parties.sort((a,b) => { return (a.name || "").localeCompare(b.name || ""); });
    return parties;
  }

  addParty(name: string): void {
    this.partyService.addParty(name).subscribe(party =>{
      this.parties.unshift(party);
      this.router.navigateByUrl(`/party/${party.id}`);
    })
  }

  isPartyOfCurrentUser(party: Party): boolean {
    return this.userService.equals(party.user);
  }

  getNickname(party: Party): string {
    return (!party || !party.user || !party.user.nickname) ? '<unknown>' : party.user.nickname;
  }

}
