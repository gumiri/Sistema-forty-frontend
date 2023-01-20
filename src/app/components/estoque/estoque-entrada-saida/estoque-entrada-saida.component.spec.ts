import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueEntradaSaidaComponent } from './estoque-entrada-saida.component';

describe('EstoqueEntradaSaidaComponent', () => {
  let component: EstoqueEntradaSaidaComponent;
  let fixture: ComponentFixture<EstoqueEntradaSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueEntradaSaidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueEntradaSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
