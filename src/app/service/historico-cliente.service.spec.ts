import { TestBed } from '@angular/core/testing';

import { HistoricoClienteService } from './historico-cliente.service';

describe('HistoricoClienteService', () => {
  let service: HistoricoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
