import { Component, OnInit }  from '@angular/core';
import { Router }             from "@angular/router";

@Component({
  selector: 'app-parties-menu',
  templateUrl: './parties-menu.component.html',
  styleUrls: ['./parties-menu.component.css']
})
export class PartiesMenuComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

}
