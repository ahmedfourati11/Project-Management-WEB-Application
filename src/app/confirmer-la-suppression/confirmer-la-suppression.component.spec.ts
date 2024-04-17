import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmerLaSuppressionComponent } from './confirmer-la-suppression.component';

describe('ConfirmerLaSuppressionComponent', () => {
  let component: ConfirmerLaSuppressionComponent;
  let fixture: ComponentFixture<ConfirmerLaSuppressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmerLaSuppressionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmerLaSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
