import { TestBed } from '@angular/core/testing';

import { EstoqueFortyvinilService } from './estoque-fortyvinil.service';

describe('EstoqueFortyvinilService', () => {
  let service: EstoqueFortyvinilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstoqueFortyvinilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
