import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoClienteComponent } from './historico-cliente.component';

describe('HistoricoClienteComponent', () => {
  let component: HistoricoClienteComponent;
  let fixture: ComponentFixture<HistoricoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
