import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortyflexComponent } from './fortyflex.component';

describe('FortyflexComponent', () => {
  let component: FortyflexComponent;
  let fixture: ComponentFixture<FortyflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortyflexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortyflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
