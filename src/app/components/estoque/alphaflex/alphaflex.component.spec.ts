import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaflexComponent } from './alphaflex.component';

describe('AlphaflexComponent', () => {
  let component: AlphaflexComponent;
  let fixture: ComponentFixture<AlphaflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaflexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphaflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
