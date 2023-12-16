import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScedulingComponent } from './sceduling.component';

describe('ScedulingComponent', () => {
  let component: ScedulingComponent;
  let fixture: ComponentFixture<ScedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScedulingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
