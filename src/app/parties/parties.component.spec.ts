import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesComponent } from './parties.component';
import {PartyService} from "../shared/party.service";
import {HttpModule} from "@angular/http";

describe('PartiesComponent', () => {
  let component: PartiesComponent;
  let fixture: ComponentFixture<PartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ PartiesComponent ],
      providers: [PartyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
