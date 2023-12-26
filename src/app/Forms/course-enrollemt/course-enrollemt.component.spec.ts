import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrollemtComponent } from './course-enrollemt.component';

describe('CourseEnrollemtComponent', () => {
  let component: CourseEnrollemtComponent;
  let fixture: ComponentFixture<CourseEnrollemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseEnrollemtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseEnrollemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
