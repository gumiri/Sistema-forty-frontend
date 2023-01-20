import { TestBed } from '@angular/core/testing';

import { EstoqueEntradaSaidaService } from './estoque-entrada-saida.service';

describe('EstoqueEntradaSaidaService', () => {
  let service: EstoqueEntradaSaidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueEntradaSaidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
