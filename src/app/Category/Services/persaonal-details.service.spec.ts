import { TestBed } from '@angular/core/testing';

import { PersaonalDetailsService } from './persaonal-details.service';

describe('PersaonalDetailsService', () => {
  let service: PersaonalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersaonalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
