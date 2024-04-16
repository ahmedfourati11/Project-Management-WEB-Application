import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDeLactiviteComponent } from './details-de-lactivite.component';

describe('DetailsDeLactiviteComponent', () => {
  let component: DetailsDeLactiviteComponent;
  let fixture: ComponentFixture<DetailsDeLactiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsDeLactiviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsDeLactiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
