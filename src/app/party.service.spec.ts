import {TestBed, inject} from '@angular/core/testing';

import {PartyService} from './party.service';
import {HttpModule} from "@angular/http";

describe('PartyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartyService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([PartyService], (service: PartyService) => {
    expect(service).toBeTruthy();
  }));
});
