import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesMenuComponent } from './parties-menu.component';

describe('PartiesMenuComponent', () => {
  let component: PartiesMenuComponent;
  let fixture: ComponentFixture<PartiesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartiesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
