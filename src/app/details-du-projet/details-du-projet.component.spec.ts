import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDuProjetComponent } from './details-du-projet.component';

describe('DetailsDuProjetComponent', () => {
  let component: DetailsDuProjetComponent;
  let fixture: ComponentFixture<DetailsDuProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsDuProjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsDuProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
