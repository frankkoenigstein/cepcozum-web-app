import { TestBed, inject } from '@angular/core/testing';

import { ProblemsSelectedGuardService } from './problems-selected-guard.service';

describe('ProblemsSelectedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemsSelectedGuardService]
    });
  });

  it('should be created', inject([ProblemsSelectedGuardService], (service: ProblemsSelectedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
