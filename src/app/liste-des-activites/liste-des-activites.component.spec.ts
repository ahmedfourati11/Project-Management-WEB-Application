import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesActivitesComponent } from './liste-des-activites.component';

describe('ListeDesActivitesComponent', () => {
  let component: ListeDesActivitesComponent;
  let fixture: ComponentFixture<ListeDesActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDesActivitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeDesActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
