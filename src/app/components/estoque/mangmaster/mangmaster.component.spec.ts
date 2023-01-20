import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangmasterComponent } from './mangmaster.component';

describe('MangmasterComponent', () => {
  let component: MangmasterComponent;
  let fixture: ComponentFixture<MangmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
