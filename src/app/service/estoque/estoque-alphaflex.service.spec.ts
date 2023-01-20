import { TestBed } from '@angular/core/testing';

import { EstoqueAlphaflexService } from './estoque-alphaflex.service';

describe('EstoqueAlphaflexService', () => {
  let service: EstoqueAlphaflexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueAlphaflexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
