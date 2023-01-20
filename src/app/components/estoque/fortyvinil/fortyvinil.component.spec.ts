import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortyvinilComponent } from './fortyvinil.component';

describe('FortyvinilComponent', () => {
  let component: FortyvinilComponent;
  let fixture: ComponentFixture<FortyvinilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortyvinilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortyvinilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
