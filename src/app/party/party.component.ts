import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import mdDateTimePicker from 'md-date-time-picker';

import {Party}                    from "../shared/party";
import {User}                     from "../shared/user";
import {Item}                     from "../shared/item";
import {PartyService}             from "../shared/party.service";

declare const moment: any;

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  party: Party;

  datepicker: mdDateTimePicker;
  timepicker: mdDateTimePicker;

  constructor(private route: ActivatedRoute,
              private partyService: PartyService) {
    this.datepicker = new mdDateTimePicker({
      type: 'date',
      past: moment(),
      future: moment().add(10, 'years')
    });
    this.timepicker = new mdDateTimePicker({
      type: 'time',
      mode: true
    });
  }

  onDateSelected(date) {
    let newDate = new Date(this.party.date.getTime());
    newDate.setFullYear(date.get('year'));
    newDate.setMonth(date.get('month'));
    newDate.setDate(date.get('date'));
    this.party.date = newDate;
  }

  onTimeSelected(time) {
    let newDate = new Date(this.party.date.getTime());
    newDate.setHours(time.get('hour'), time.get('minute'), 0, 0);
    this.party.date = newDate;
  }

  @ViewChild('datepickerRef') set initDatepicker(datepickerRef: ElementRef) {
    if (datepickerRef && datepickerRef.nativeElement) {
      this.datepicker.trigger = datepickerRef.nativeElement;
    }
  }

  @ViewChild('timepickerRef') set initTimepicker(timepickerRef: ElementRef) {
    if (timepickerRef && timepickerRef.nativeElement) {
      this.timepicker.trigger = timepickerRef.nativeElement;
    }
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.partyService.loadPartyById(params['id']))
      .subscribe(party => this.party = party as Party);
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
