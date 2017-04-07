import { TestBed, inject } from '@angular/core/testing';

import { ApitestService } from './api.service';

describe('ApitestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApitestService]
    });
  });

  it('should ...', inject([ApitestService], (service: ApitestService) => {
    expect(service).toBeTruthy();
  }));
});
