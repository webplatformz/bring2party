import { Component, OnInit }        from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-party-menu',
  templateUrl: './party-menu.component.html',
  styleUrls: ['./party-menu.component.css']
})
export class PartyMenuComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
