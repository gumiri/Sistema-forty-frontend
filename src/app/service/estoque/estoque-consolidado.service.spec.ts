import { TestBed } from '@angular/core/testing';

import { EstoqueConsolidadoService } from './estoque-consolidado.service';

describe('EstoqueConsolidadoService', () => {
  let service: EstoqueConsolidadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueConsolidadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
