import { TestBed } from '@angular/core/testing';

import { AllPetsForUIService } from './all-pets-for-ui.service';

describe('AllPetsForUIService', () => {
  let service: AllPetsForUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPetsForUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
