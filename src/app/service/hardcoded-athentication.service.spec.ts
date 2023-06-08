import { TestBed } from '@angular/core/testing';

import { HardcodedAthenticationService } from './hardcoded-athentication.service';

describe('HardcodedAthenticationService', () => {
  let service: HardcodedAthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
