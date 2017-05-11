import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyGiftsComponent } from './party-gifts.component';

describe('PartyGiftsComponent', () => {
  let component: PartyGiftsComponent;
  let fixture: ComponentFixture<PartyGiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyGiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
