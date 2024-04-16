import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvprojComponent } from './nvproj.component';

describe('NvprojComponent', () => {
  let component: NvprojComponent;
  let fixture: ComponentFixture<NvprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NvprojComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NvprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
