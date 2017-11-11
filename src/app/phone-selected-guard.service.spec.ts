import { TestBed, inject } from '@angular/core/testing';

import { PhoneSelectedGuardService } from './phone-selected-guard.service';

describe('PhoneSelectedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneSelectedGuardService]
    });
  });

  it('should be created', inject([PhoneSelectedGuardService], (service: PhoneSelectedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
