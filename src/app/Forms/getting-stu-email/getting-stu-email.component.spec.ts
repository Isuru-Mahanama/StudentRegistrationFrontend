import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStuEmailComponent } from './getting-stu-email.component';

describe('GettingStuEmailComponent', () => {
  let component: GettingStuEmailComponent;
  let fixture: ComponentFixture<GettingStuEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GettingStuEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GettingStuEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
