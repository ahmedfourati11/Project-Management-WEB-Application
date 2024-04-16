import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprojComponent } from './allproj.component';

describe('AllprojComponent', () => {
  let component: AllprojComponent;
  let fixture: ComponentFixture<AllprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllprojComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
