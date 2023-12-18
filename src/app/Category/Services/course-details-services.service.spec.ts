import { TestBed } from '@angular/core/testing';

import { CourseDetailsServicesService } from './course-details-services.service';

describe('CourseDetailsServicesService', () => {
  let service: CourseDetailsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseDetailsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
