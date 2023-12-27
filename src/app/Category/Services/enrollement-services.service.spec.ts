import { TestBed } from '@angular/core/testing';

import { EnrollementServicesService } from './enrollement-services.service';

describe('EnrollementServicesService', () => {
  let service: EnrollementServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollementServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
