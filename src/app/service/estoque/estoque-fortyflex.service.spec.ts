import { TestBed } from '@angular/core/testing';

import { EstoqueFortyflexService } from './estoque-fortyflex.service';

describe('EstoqueFortyflexService', () => {
  let service: EstoqueFortyflexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueFortyflexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
