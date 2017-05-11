import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Party }                    from "../shared/party";
import { Item }                    from "../shared/item";
import { PartyService }             from "../shared/party.service";
import {UserService} from "../shared/user.service";
import {ClaimedItem} from "../shared/claimedItem";

@Component({
  selector: 'app-party-gifts',
  templateUrl: './party-gifts.component.html',
  styleUrls: ['./party-gifts.component.css']
})
export class PartyGiftsComponent implements OnInit {

  party: Party;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private partyService: PartyService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.partyService.loadPartyById(params['id']))
      .subscribe(party => this.party = party as Party);
  }

  hasRemainingItemCount(item: Item): boolean {
    return this.getRemainingItemCount(item) > 0;
  }

  getRemainingItemCount(item: Item): number {
    let claimedItemCount = 0;
    (item.claims || []).forEach(claim => { claimedItemCount += (claim.count || 0) });
    return Math.max((item.count || 0) - claimedItemCount);
  }

  incrementCurrentUserItemCount(item: Item): void {
    let claimedItem = this.getCurrentUserClaim(item);
    if (!claimedItem) {
      claimedItem = new ClaimedItem(this.userService.getUser());
      item.claims.push(claimedItem);
    }
    claimedItem.count++;
  }

  decrementCurrentUserItemCount(item: Item): void {
    let claimedItem = this.getCurrentUserClaim(item);
    if (claimedItem) {
      claimedItem.count--;
    }
    if (claimedItem.count <= 0) {
      item.claims = item.claims.filter(claim => !this.userService.equals(claim.user));
    }
  }

  hasRemainingCurrentUserItemCount(item: Item): boolean {
    return this.getCurrentUserItemCount(item) > 0;
  }

  getCurrentUserItemCount(item: Item): number {
    let claimedItem = this.getCurrentUserClaim(item);
    return claimedItem ? claimedItem.count : 0;
  }

  getCurrentUserClaim(item: Item): ClaimedItem {
    return item.claims.find(claim => this.userService.equals(claim.user));
  }

  goBack(): void {
    this.location.back();
  }

}
