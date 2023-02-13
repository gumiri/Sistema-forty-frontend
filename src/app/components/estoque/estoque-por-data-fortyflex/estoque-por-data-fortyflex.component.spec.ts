import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquePorDataFortyflexComponent } from './estoque-por-data-fortyflex.component';

describe('EstoquePorDataFortyflexComponent', () => {
  let component: EstoquePorDataFortyflexComponent;
  let fixture: ComponentFixture<EstoquePorDataFortyflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoquePorDataFortyflexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoquePorDataFortyflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
